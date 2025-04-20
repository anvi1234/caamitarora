import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any; // Declare jQuery if needed
interface Alert {
	type: string;
	message: string;
}
const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private hasReloaded: boolean = false; // Flag to prevent multiple reloads
  contactForm!: FormGroup;
  isVisible: boolean = false;
  showNavigationArrows = true;
	showNavigationIndicators = false;
  public testinomial :any[] =[];
  alerts!: Alert[];
  isHovered: boolean = false;
  isHovered2: boolean = false;

  
  constructor(private router: Router,
    private adminSer:AdminService
  ) {
    this.createContact();
    this.getTestinomial();
    this.getEvent();
    this.EventData.forEach(() => this.showOverlays.push(false));
  } 
   
  ngAfterViewInit(){
    this.getTestinomial();

   
  }
  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/home' && !this.hasReloaded) {
          this.hasReloaded = true;
          window.location.reload();
        }
      }
    });
  }

  showOverlays: boolean[] = [];

  // Methods to control overlay visibility
  onMouseEnter(index: number) {
    console.log("index", index)
    this.showOverlays[index] = true;
  }

  onMouseLeave(index: number) {
    this.showOverlays[index] = false;
  }

  public EventData:any = [
    {
      id:'1', eventName:"Sports Day Celebration" , eventFile:".../../assets/img/event/sportday.jpg"
    },
    {
      id:'2', eventName:"Prize Distribution ceremony May 2024 results" , eventFile:"../../assets/img/event/prizedist.JPG", date:''
    },
   
    {
      id:'4', eventName:"Teacher's Day celebration" , eventFile:"../../assets/img/event/teacherday.jpeg", date:''
    },
    {
      id:'5', eventName:"Parents Teacher meeting" , eventFile:"../../assets/img/event/parentteacher.jpeg", date:''
    },
    {
      id:'6', eventName:"Parents Teacher meeting" , eventFile:"../../assets/img/event/parenteacher2.jpeg", date:''
    },
    {
      id:'3', eventName:"Holi Celebration" , eventFile:"../../assets/img/event/holi.jpeg", date:''
    },
  ]

  getTestinomial(){
    this.adminSer.getReviews().subscribe((res: any) => {
        this.testinomial = res
    })
  }



  createContact(){
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('',[Validators.required]),
      phone:new FormControl('', [Validators.required,Validators.maxLength(10), Validators.pattern(/^\d{0,10}$/)]),
      message: new FormControl('', [Validators.required])
    });
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Block non-numeric keys
    }
  }
  
  restrictMaxLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10);
      this.contactForm.get('phone')?.setValue(input.value);
    }
  }
  getEvent(){
    this.adminSer.getEvent().subscribe((Res)=>{
      this.EventData = Res.sort((a, b) => a.position - b.position);
    })
  }

  onSubmit(){
    if (this.contactForm.valid) {
      // Process the form data
      this.adminSer.addContact(this.contactForm.value).subscribe((res)=>{
          this.showDiv();
      this.contactForm.reset();
      })

    
    } else {
      console.log('Form is invalid');
    }
    
  }
  showDiv() {
    this.isVisible = true;  // Show the div
    setTimeout(() => {
      this.isVisible = false;  // Hide the div after 5 seconds
    }, 2000);  // 5000ms = 5 seconds
  }
  onMouseEnterImg(){
    this.isHovered = true;
  }
  
  onMouseLeaveImg(){
    this.isHovered = false;
  }
  onMouseEnterImg2(){
    this.isHovered2 = true;
  }
  
  onMouseLeaveImg2(){
    this.isHovered2 = false;
  }
}

