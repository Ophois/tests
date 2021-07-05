import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// pour le test du service
import { CalculatriceService } from '../calculatrice.service';
// pour le test du composant
import { MonComposantComponent } from './mon-composant.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;
  // pour l'accès aux éléments du composant
  let debugElement: DebugElement;
  //mon service calculatrice
  let calculatrice: CalculatriceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    // définition de debugElement
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    // instance du service calculatrice
    calculatrice = TestBed.get(CalculatriceService);
  });

  // le composant doit être instancié
  it('doit être créé', () => {
    expect(component).toBeTruthy();
  });

  /* récupération du contenu d'un élément en fonction de son id */
  it("retourner l'élément par son ID", () => {
    const parId = debugElement.nativeElement.querySelector('#unId');
    expect(parId.textContent).toEqual("Une chaine avec un ID");
  });

  /* récupération du contedu d'un élément en fonction de sa classe */
  it("retourne un élément par sa classe CSS", () => {
    const parCls = debugElement.nativeElement.querySelector('.maClass');
    expect(parCls.textContent).toEqual('Une chaine avec une classe');
  });

  /* récupération d'un attribut d'un élément (alt d'une image) */
  it("doit récupérer l'attribut alt de l'image", () => {
    const monImg = debugElement.nativeElement.querySelector('#image');
    expect(monImg.getAttribute('alt')).toEqual('Angular12');
  });

  /* exécution de la fonction associée à un bouton */
  it("doit simuler l'appui sur le bouton", () => {
    expect(component.addition()).toEqual(5);
  });

  /* simulation d'appel d'un service
     (spyOn définit la valeur de retour pour l'appel) */
  it("appel du service", () => {
    spyOn(calculatrice, 'addition').and.returnValue(5);
    expect(calculatrice).toBeTruthy();
    expect(calculatrice.addition(3,2)).toEqual(5);
  });
});
