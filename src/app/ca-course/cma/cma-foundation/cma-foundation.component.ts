import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cma-foundation',
  templateUrl: './cma-foundation.component.html',
  styleUrls: ['./cma-foundation.component.css']
})
export class CmaFoundationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }

}
