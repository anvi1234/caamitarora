import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-intermediate',
  templateUrl: './ca-intermediate.component.html',
  styleUrls: ['./ca-intermediate.component.css']
})
export class CaIntermediateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }

}
