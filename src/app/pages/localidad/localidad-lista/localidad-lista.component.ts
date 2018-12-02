import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localidad-lista',
  templateUrl: './localidad-lista.component.html',
  styleUrls: ['./localidad-lista.component.scss']
})
export class LocalidadListaComponent implements OnInit {

  localidades: string[] = [
    'Caacupé',
    'Asunción',
    'Ciudad del este',
    'Ypacarai',
    'Tobati',
    'Aregua',
    'Capiata',
    'Encarnación',
    'Eusebio Ayala'
  ];

  constructor() { }

  ngOnInit() {
  }

}
