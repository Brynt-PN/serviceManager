import { Component, OnInit } from '@angular/core';
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonCardHeader, IonCardTitle, IonLabel, IonList, IonItem, IonButton, IonCard]
})
export class DetailsAfiliationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
