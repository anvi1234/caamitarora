import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
public bannerData : any[] = [];
  constructor(
    private adminSer: AdminService
  ) { }
  ngOnInit(): void {
    this.adminSer.getBanners().subscribe((Res)=>{
      let data = Res.filter((b:any)=>{
        return b.position != null;
      })
      this.bannerData = Res.sort((a, b) => a.position - b.position);

    })
    
  }

}