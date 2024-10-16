import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.component.html',
  styleUrls: ['./buy-course.component.css']
})
export class BuyCourseComponent implements OnInit {
  foundationCourse: any[] =[];
 IntermedaietCOurse:any[] = [];
  constructor(private adminSer: AdminService) {
    this.getBuyCourse()
   }

  ngOnInit(): void {
  }
  getBuyCourse(){
    this.adminSer.getCourses().subscribe((res)=>{
this.foundationCourse = res.filter((d)=>{
        return d.courseType == 'foundation'
    })
this.IntermedaietCOurse = res.filter((d)=>{
  return d.courseType == "intermediate"
})

    })
  }
}
