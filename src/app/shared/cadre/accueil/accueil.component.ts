import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  title = 'GESTION DE PROJET DE MISE EN VALEUR DES COMPETENCES';
  constructor() { }

  ngOnInit() {
  }

}
