import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cma-final',
  templateUrl: './cma-final.component.html',
  styleUrls: ['./cma-final.component.css']
})
export class CmaFinalComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }

}
