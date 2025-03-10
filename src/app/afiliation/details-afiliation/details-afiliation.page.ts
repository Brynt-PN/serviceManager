import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader, IonImg, IonItem, IonLabel, IonList, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details-afiliation',
  templateUrl: './details-afiliation.page.html',
  styleUrls: ['./details-afiliation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonLabel, IonList, IonItem, IonButton, IonCard]
})
export class DetailsAfiliationPage {
  @ViewChildren('ionItem') ionItems!: QueryList<ElementRef>
  comprovate: string = "Afiliar";


  constructor() { }

  arrdetalle:{element:String}[]=[
    {element:"Naturaleza"},{element:"Monto total"}];

  arrDatos: {Status:String;Nombre:String}[]=[{Status:"Creador",Nombre:"Oscar Jean mario Arias Camasca"},{Status:"Afiliado",Nombre:"Brayant Palomino"}];

  btnMetod(){
    if (this.comprovate==="Afiliar"){
      this.comprovate="Desafiliar";
    }
    else if (this.comprovate==="Desafiliar"){
      this.comprovate="Afiliar";
    }
  }
}
