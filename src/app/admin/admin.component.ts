import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";  
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedForm: string = '';  // Variable to store the currently selected form
  bannerForm!: FormGroup;  
  teacherForm!: FormGroup; 
  reviewForm!: FormGroup; 
  resultForm!: FormGroup; 
  eventForm!: FormGroup; 
  buyCourseForm!: FormGroup;
  downloadURL!: Observable<string>;
  isLoader :  boolean = false
  resultImg:any;
  bannerImg:any;
  teacherImg:any;
  studentImg:any;
  courseImg:any;
  eventImg:any
  @ViewChild('youtubeInput') youtubeInput!: ElementRef;
  @ViewChild('studentImgID') studentImgID!: ElementRef;
  @ViewChild('courseImgID') courseImgID!: ElementRef;
  @ViewChild('eventInput') eventInput!: ElementRef;
  @ViewChild('teacherImage') teacherImage!: ElementRef;
  @ViewChild('resultImage') resultImage!: ElementRef;
  contactList: any[] =[];
  bannerList: any[] =[];
  courseList: any[] = [];
  reviewList: any[] =[];
  eventList:any[] = [];
  teacherList: any[] =[];
  resultList:any[] =[];
  bannerEdit: boolean = false;
  bannerUkey: any;
  resultEdit: boolean = false;
  resultUkey: any;
  showForm(formName: string): void {
    this.selectedForm = formName;  // Set the selected form based on the link clicked

    if(formName === "contact"){
      this.getContactList();
    }

    if(formName === "banner"){
      this.getBanner();
    }
    if(formName === "buyCourse"){
      this.getBuyCourse()
    }
    if(formName === "review"){
      this.getReview();
    }
    if(formName === "event"){
      this.getEvent();
    }
    if(formName === "teacher"){
      this.getTeacher();
    }
    if(formName === "result"){
      this.getResult()
    }
  }


  getContactList(){
    this.adminService.getContacts().subscribe((res)=>{
      this.contactList =  [...res].reverse();
    })
  }

  constructor(private fb: FormBuilder,
    private storage: AngularFireStorage,
    private adminService: AdminService
  ) {
   this.intializationBannerForm();
   this.createTeacherForm();
   this.createBuyCourseForm();
   this.createReviewForm();
   this.createResultForm();
   this.createEventForm();
  }
  ngOnInit(): void {
    
  }

  createBuyCourseForm() {
    this.buyCourseForm = this.fb.group({    // Course name input
      courseType: ['', Validators.required],     // Course type dropdown (Foundation/Intermediate)
      courseLink: ['', Validators.required], // href input (URL pattern)
       // File input for course image
    });
  }

  createResultForm() {
    this.resultForm = this.fb.group({
      resultImage: [null, Validators.required],
      position:['']  // File input for result image
    });
  }
  createReviewForm() {
    this.reviewForm = this.fb.group({
      studentName: ['', Validators.required],    // Student name input
      studentDetails: ['', Validators.required], // Student details input
      reviewDescription: ['', Validators.required]  // Review description textarea
    });
  }

  intializationBannerForm(){
    this.bannerForm = this.fb.group({
      position: ['']  // Numeric input control with validation
    });
  }

  createEventForm(){
    this.eventForm = this.fb.group({
      eventName: [''],
      position:[null]  // Numeric input control with validation
    });
  }
  createTeacherForm() {
    this.teacherForm = this.fb.group({
      position:['', Validators.required],
      teacherName: ['', Validators.required],   // Teacher name input // Teacher image file input
      teacherDetails: ['', Validators.required], // Teacher details input
      teacherDescription: ['', Validators.required], // Teacher description textarea
      teacherLevel: ['', Validators.required]   // Dropdown for foundation/intermediate
    });
  }

  onSubmit(): void {
    if(this.bannerEdit && this.bannerImg){
      let Obj = {
        'bannerFile': this.bannerImg,
        'position':this.bannerForm.get('position')?.value
      }
      this.adminService.updateBanner(Obj,this.bannerUkey).subscribe((res)=>{
        alert("Banner updated Successfuly")
        this.bannerForm.reset();
        this.youtubeInput.nativeElement.value = '';
        this.bannerImg = null;
        this.getBanner();
        this.bannerEdit = false;
       
      })
      // Implement form submission logic here

    }
    else{
      if (this.bannerForm.valid && this.bannerImg) {
        let Obj = {
          'bannerFile': this.bannerImg,
          'position':this.bannerForm.get('position')?.value
        }
        this.adminService.addBanner(Obj).subscribe((res)=>{
          this.bannerForm.reset();
          this.youtubeInput.nativeElement.value = '';
          this.bannerImg = null;
          this.getBanner();
          alert("Banner added Successfuly")
        })
        // Implement form submission logic here
      } else {
        console.log('Form is invalid');
      }
    }
   
  }

  onSubmitEvent(){
    if (this.eventForm.valid && this.eventImg) {
      let Obj = {
        'eventFile': this.eventImg,
        'eventName':this.eventForm.get('eventName')?.value,
        'position': this.eventForm.get('position')?.value
      }
      this.adminService.addEvent(Obj).subscribe((res)=>{
        this.eventForm.reset();
        this.eventInput.nativeElement.value = '';
        this.eventImg = null;
        this.getEvent();
        alert("Event added Successfuly")
      })
      // Implement form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
  onSubmitTeacherForm(): void {
    if (this.teacherForm.valid && this.teacherImg) {
      let obj = {
        'teacherName': this.teacherForm.get('teacherName')?.value,
        'teacherImage': this.teacherImg,
        'teacherDetails': this.teacherForm.get('teacherDetails')?.value,
        'teacherDescription':this.teacherForm.get('teacherDescription')?.value,
        'teacherLevel':this.teacherForm.get('teacherLevel')?.value,
        'position': Number(this.teacherForm.get('position')?.value)
      }
 
      this.adminService.addTeacher(obj).subscribe((res)=>{
        this.teacherForm.reset();
        this.teacherImg = null;
        this.teacherImage.nativeElement.value = '';
        this.getTeacher()
          alert("Teacher added Successfuly")
      })
      
      // You can implement the actual submission logic here (e.g., sending the formData to a server)
    } else {
      console.log('Teacher form is invalid');
    }
  }
  getTeacher(){
    this.adminService.getTeachers().subscribe((res)=>{
      this.teacherList = res;
    })
  }

  onSubmitReviewForm(): void {
    if (this.reviewForm.valid && this.studentImg) {
      let obj = {
        'studentName':this.reviewForm.get('studentName')?.value,
        'studentImage':this.studentImg,
        'studentDetails':this.reviewForm.get('studentDetails')?.value,
        'reviewDescription': this.reviewForm.get('reviewDescription')?.value
      }
      this.adminService.addReview(obj).subscribe((res)=>{
        this.reviewForm.reset();
        this.studentImgID.nativeElement.value = '';
        this.studentImg = null
        
        alert("Review added Successfuly")
      })
      // You can implement the actual submission logic here (e.g., sending the formData to a server)
    } else {
      console.log('Review form is invalid');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.resultForm.patchValue({
        resultImage: file
      });
    }
  }
  onSubmitResultForm(): void {
    if(this.resultEdit){
        let obj ={
          resultImage:this.resultImg,
          position:this.resultForm.get('position')?.value
        
      }
      this.adminService.updateResult(this.resultUkey,obj).subscribe((res)=>{
        alert("Result updated Successfuly")
        this.resultForm.reset();
        this.resultImage.nativeElement.value = '';
        this.resultImg = null;
        this.getResult();
        this.resultEdit= false;
       
      })
    }
    if (this.resultForm.valid && this.resultImg) {
      const formData = new FormData();
      let obj ={
        resultImage:this.resultImg,
        position:this.resultForm.get('position')?.value
      }
     

      this.adminService.addResult(obj).subscribe((res)=>{
        alert("Result added Successfuly")
        this.resultForm.reset();
        this.resultImage.nativeElement.value = '';
        this.resultImg = null;
        this.getResult();
       
      })
      // Implement the actual submission logic here (e.g., sending formData to a server)
    } else {
      console.log('Result form is invalid');
    }
  }

  onSubmitBuyCourseForm(): void {
    console.log("buyCours",this.buyCourseForm, this.courseImg)
    if (this.buyCourseForm.valid && this.courseImg) {
      let obj = {
        'courseType':this.buyCourseForm.get('courseType')?.value,
        'courseLink':this.buyCourseForm.get('courseLink')?.value,
        'courseImage':this.courseImg
       
      }
      console.log("objected",obj );
      this.adminService.addCourse(obj).subscribe((res)=>{
        this.buyCourseForm.reset();
        this.courseImg = null;
        this.courseImgID.nativeElement.value = '';
        this.getBuyCourse();
        alert("Course added Successfuly")
      })
      // You can implement the actual submission logic here (e.g., sending the formData to a server)
    } else {
      console.log('Buy course form is invalid');
    }
  }
  onEventFileChange(event:any){
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraEvent/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraEvent/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.eventImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  onBannerFileChange(event:any){
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraBanner/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraBanner/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.bannerImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  onTeacherFileChange(event:any){
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraTeacher/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraTeacher/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.teacherImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  onStudentFileChange(event:any){
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraStudent/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraStudent/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.studentImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  onResultChange(event:any){
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraResult/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraResult/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.resultImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  onFileChangeBuyCourse(event: any): void {
    this.isLoader = true    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `aroraCourse/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`aroraCourse/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.courseImg = url;
              this.isLoader = false;  
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  deleteContact(item:any){
    this.adminService.deleteContact(item._id).subscribe((res)=>{
      alert("Contact deleted Successfully.");
      this.getContactList();
    })
  }

  getBanner(){
    this.adminService.getBanners().subscribe((Res)=>{
      this.bannerList = Res;
    })
  }

  bannerDelete(item:any){
    this.adminService.deleteBanner(item._id).subscribe((res)=>{
      alert("Banner deleted Successfully.");
      this.getBanner();
    })
  }
  courseDelete(item:any){
    this.adminService.deleteCourse(item._id).subscribe((res)=>{
      alert("Course deleted Successfully.");
      this.getBuyCourse();
    })
  }
  getBuyCourse(){
    this.adminService.getCourses().subscribe((Res)=>{
        this.courseList = Res
    })
  }

  getReview(){
    this.adminService.getReviews().subscribe((Res)=>{
      this.reviewList = Res;
    })
  }
  getEvent(){
this.adminService.getEvent().subscribe((Res)=>{
  this.eventList = Res;
})
  }
  eventDelete(item:any){
    this.adminService.deleteEvent(item._id).subscribe((res)=>{
      alert("Event deleted Successfully.");
      this.getEvent();
    }) 
  }
  teacherDelete(item:any){
    this.adminService.deleteTeacher(item._id).subscribe((res)=>{
      alert("Teacher deleted Successfully.");
      this.getTeacher();
    }) 
  }

  edit(dataItem:any){
    this.bannerEdit= true;
    this.bannerImg = dataItem.bannerFile;
    this.bannerForm.get("position")?.setValue(dataItem.position);
    this.bannerUkey = dataItem._id

  }

  getResult(){
    this.adminService.getResult().subscribe((res)=>{
      this.resultList = res
    })
  }

  deleteResult(item:any){
    this.adminService.deleteResult(item._id).subscribe((res)=>{
      alert("Result deleted Successfully.");
      this.getResult();
    }) 
  }
  editResult(dataItem:any){
    this.resultEdit=  true;
    this.resultForm.get("position")?.setValue(dataItem.position);
    this.resultImage = dataItem.resultImage;
    this.resultUkey = dataItem._id;

  }
}
