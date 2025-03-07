import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonThumbnail,
  IonImg,
} from '@ionic/angular/standalone';
import { Router, NavigationEnd } from '@angular/router';
import { ServiceService } from '../share/services/service.service';
import { Services } from '../share/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCardHeader,
    IonItem,
    IonButton,
    IonThumbnail,
  ],
})
export class ServicePage implements OnInit {
  private router = inject(Router);
  private serviceService = inject(ServiceService);
  services: Services | undefined;

  ngOnInit(): void {
    this.services = this.serviceService.Services();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/service') {
        this.services = this.serviceService.Services();
      }
    });
  }

  getDetails(id: number) {
    this.router.navigate(['service/', id]);
  }

  addService() {
    this.router.navigate(['service/add-service']);
  }
}
