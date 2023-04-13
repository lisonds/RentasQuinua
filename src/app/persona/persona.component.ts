import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service'; 

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  personas:Persona[];

  constructor(private PersonaService:PersonaService ){};
  ngOnInit(): void {
   this.PersonaService.getPersona().subscribe(
    personas=>this.personas=personas
    
    
   );
  }
  
}
