import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarOpen = false;
  isCollapsed = true;
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMenu() {
    this.isCollapsed = true;
  }

  @HostListener('document:click', ['$event'])
  closeNavbar(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.isNavbarOpen = false; // Close the navbar if the click is outside of it
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  route(route:string){
    this.router.navigateByUrl(route)
    this.closeMenu();
  }
 
}
