import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public persona: Persona = new Persona();
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {

  }

  /**
   * create
   :void*/
  public create(): void {
    //console.log("Clicked!")
    //console.log(this.persona)
    this.personaService.create(this.persona).subscribe(
      Persona => {this.router.navigate(['/persona'])
      Swal.fire('Nuevo Usuario!',
        `Usuario ${Persona.nombre} Creado`,
        'success'
      )
    }
    )
  }
}

