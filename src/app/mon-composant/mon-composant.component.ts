import { Component, OnInit } from '@angular/core';
import { CalculatriceService } from '../calculatrice.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  // résultat de l'addition
  resultat !: number

  // injection du service calculatrice
  constructor(private calc: CalculatriceService) { }

  ngOnInit(): void {
  }

  // addition avec appel du service
  addition(): number{
    this.resultat = this.calc.addition(3, 3);
    return this.calc.addition(3,2);
  }
}
