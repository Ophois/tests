import { TestBed } from '@angular/core/testing';
import { CalculatriceService } from './calculatrice.service';

describe('CalculatriceService', () => {
  // définition du type d'objet
  let service: CalculatriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //injection du service pour tests
    service = TestBed.inject(CalculatriceService);
  });

  // test d'instanciation du service
  it('doit être instancié', () => {
    expect(service).toBeTruthy();
  });
  // test de la méthode addition
  it("doit retourner l'addition de deux nombres", () => {
    expect(service.addition(2, 3)).toEqual(5);
  });
  // test de la méthode soustraction
  it("doit retourner la soustraction de deux nombres", () => {
    expect(service.soustraction(3,2)).toEqual(1);
  });
  // test de la méthode multiplication
  it("doit retourner la multiplication de deux nombres", () => {
    expect(service.multiplication(3,2)).toEqual(6);
  });
  // test de la méthode division
  it("doit retourner la division de deux nombres", () => {
    expect(service.division(8,2)).toEqual(4);
  });
});
