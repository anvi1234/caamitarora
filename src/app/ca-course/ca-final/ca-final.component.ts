import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-final',
  templateUrl: './ca-final.component.html',
  styleUrls: ['./ca-final.component.css']
})
export class CaFinalComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId });
  }
}
