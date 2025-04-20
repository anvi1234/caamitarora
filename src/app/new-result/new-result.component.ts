import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.css']
})
export class NewResultComponent implements OnInit {

  constructor(
    private adminSer: AdminService
  ) { }

  ngOnInit(): void {
    this.getResult()
  }

  public result:any = [
  ]

  getResult(){
    this.adminSer.getResult().subscribe((res:any)=>{
      this.result = res;
    })
  }
}
