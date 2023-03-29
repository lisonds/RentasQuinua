import { Component } from '@angular/core';
import { faCoffee, faPerson,faFile,faCircleQuestion,
  faGear,faDroplet  } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentasQuinua';
  faCoffee = faCoffee;
  faPerson=faPerson;
  faFile=faFile;
  faCircleQuestion=faCircleQuestion;
  faGear=faGear;
  faDroplet=faDroplet;
  
}
