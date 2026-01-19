import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  showLayout = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
       const hiddenRoutes = ['/admin'];

        // Hide header/footer if current route is in hiddenRoutes
        this.showLayout = !hiddenRoutes.some(route => event.url.startsWith(route));
      });
  }
 

 
}
