import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxResponse } from 'rxjs/ajax';
//componenti figli
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserisciComponent } from './inserisci/inserisci.component';
//servizi
//import { CallServer } from './call_server.service';
//classi

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [ CommonModule, RicercaComponent, InserisciComponent ],
 // providers: [CallServer],
  standalone: true
})
export class RootComponent implements OnInit {
  title: string = 'Gestore di Biblioteca';

  //prenderà valore di ricercaEseguita (ricerca.component.ts)
  eseguiRicerca() {
    console.log("Ricerca eseguita nel componente root.");
    // Altre azioni da eseguire quando viene eseguita la ricerca
  }

  
  eseguiInserimento() {
    console.log("Inserimento eseguito nel componente root.");
    
  }

  constructor() { }

  ngOnInit() {
  }

}
