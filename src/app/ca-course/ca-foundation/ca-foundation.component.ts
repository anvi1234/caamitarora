import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-foundation',
  templateUrl: './ca-foundation.component.html',
  styleUrls: ['./ca-foundation.component.css']
})
export class CaFoundationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }

}
