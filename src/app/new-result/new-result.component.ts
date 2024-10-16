import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.css']
})
export class NewResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public result = [

    {id:1, img:"../../assets/img/result/1.jpeg"},
    {id:2, img:"../../assets/img/result/2.jpeg"},
    {id:3, img:"../../assets/img/result/3.jpeg"},
    {id:4, img:"../../assets/img/result/5.png"},
    {id:5, img:"../../assets/img/result/2.png"},
    {id:6, img:"../../assets/img/result/4.png"},
    {id:7, img:"../../assets/img/result/3.png"},
    {id:8, img:"../../assets/img/result/1.png"}
  ]
}
