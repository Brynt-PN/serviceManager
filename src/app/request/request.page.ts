import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonThumbnail
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonThumbnail, IonButton]
})
export class RequestPage {
  arrSolicitudes : {imgUrl:String; Service: String; requester: String}[]=[
    {imgUrl:"/assets/icon/Calidda.jpg",Service:"Gas Calidda", requester : "Oscar Jean Mario Arias Camasca"},
    {imgUrl:"/assets/icon/netflix.jpg",Service:"Netflix", requester : "Jean Clairon Mario Arias Camasca"},
    {imgUrl:"/assets/icon/onlyfans.jpg",Service:"OnlyFans", requester : "Brayant Palomino"}
];

  constructor() { }

}
