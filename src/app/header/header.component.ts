import { Component, OnInit } from "@angular/core";
import { faBars
   } from '@fortawesome/free-solid-svg-icons'; 
import { CargarScriptsService } from "../cargar-scripts.service";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
        
})

export class HeaderComponent {
    constructor(private _cargaScripts:CargarScriptsService){
        _cargaScripts.Carga(["main"]);
    }
    faBars = faBars;
    
}