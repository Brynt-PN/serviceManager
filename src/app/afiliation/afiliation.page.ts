import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader, IonImg, IonItem, IonLabel, IonList, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-afiliation',
  templateUrl: './afiliation.page.html',
  styleUrls: ['./afiliation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonList, IonItem, IonLabel, IonImg, IonThumbnail]
})
export class AfiliationPage {

  arrAfiliacion : {imgUrl:String; Service: String; Owner: String; Nature:String; Price:number}[]=[
    {imgUrl:"/assets/icon/Calidda.jpg",Service:"Gas Calidda", Owner : "Oscar Jean Mario Arias Camasca",Nature:"Variable",Price:34},
    {imgUrl:"/assets/icon/netflix.jpg",Service:"Netflix", Owner : "Jean Clairon Mario Arias Camasca",Nature:"Fijo", Price:29.30},
    {imgUrl:"/assets/icon/onlyfans.jpg",Service:"OnlyFans", Owner : "Brayant Palomino",Nature:"Fijo", Price:51}
  ];

  constructor() { }



}
