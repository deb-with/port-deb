import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent {
  
  navberfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if (window.scrollY > 100)
    {
      this.navberfixed = true;
    }
    else{
      this.navberfixed = false;
    }
  }

}
