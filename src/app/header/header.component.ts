import { Component, OnInit } from "@angular/core";
import {YoutubescriptService} from '../service/youtube.service';
import { faBars,faCoffee, faPerson,faFile,faCircleQuestion,
    faGear,faDroplet ,faMagnifyingGlass 
   } from '@fortawesome/free-solid-svg-icons'; 


@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
        
})

export class HeaderComponent {
    constructor(private youtubeservice: YoutubescriptService) {
        this.youtubeservice.loadScript();
      }
    faBars = faBars;
    faCoffee = faCoffee;
    faPerson=faPerson;
    faFile=faFile;
    faCircleQuestion=faCircleQuestion;
    faGear=faGear;
    faDroplet=faDroplet;
    faMagnifyingGlass=faMagnifyingGlass;
    
}