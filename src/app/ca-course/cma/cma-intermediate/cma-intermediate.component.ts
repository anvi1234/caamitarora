import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cma-intermediate',
  templateUrl: './cma-intermediate.component.html',
  styleUrls: ['./cma-intermediate.component.css']
})
export class CmaIntermediateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }
}
