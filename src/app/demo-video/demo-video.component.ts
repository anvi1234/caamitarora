import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-demo-video',
  templateUrl: './demo-video.component.html',
  styleUrls: ['./demo-video.component.css']
})
export class DemoVideoComponent implements OnInit {
  videos:any = []
  constructor(
    private adminSer: AdminService
  ) {
      this.getDemo();
   }

   getEmbedUrl(url: string): string {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
}

getDemo(){
  this.adminSer.getDemo().subscribe((Res)=>{
    this.videos = Res;
  })
}
  ngOnInit(): void {
  }

}
