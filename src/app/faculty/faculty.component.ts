import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private adminSer : AdminService
  
  ) { 
    this.getFaculty();
  }

  ngAfterViewInit() {
    // Listen for the 'fragment' parameter in the route
    this.route.fragment.subscribe(fragment => {
      this.scrollToElement(fragment);  // Scroll to the element if a fragment is provided
    });
  }

  scrollToElement(sectionId: string | null) {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  public  data:any = []
  
  public  facultyData:any = []

  getFaculty(){
    this.adminSer.getTeachers().subscribe((Res)=>{
      this.data = Res.filter((e)=>{
        return e.teacherLevel === "foundation"
      })
      this.data.sort((a:any, b:any) => a.position - b.position);
      this.facultyData = Res.filter((e)=>{
        return e.teacherLevel === "intermediate"
      })
      this.facultyData.sort((a:any, b:any) => a.position - b.position);
    })
  }
  
}
