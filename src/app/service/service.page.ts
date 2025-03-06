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
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ServiceService } from '../share/services/service.service';
import { Services } from '../share/models/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class ServicePage implements OnInit {
  private router = inject(Router);
  private serviceService = inject(ServiceService);
  services: Services | undefined;

  ngOnInit(): void {
    this.services = this.serviceService.Services();
  }

  getDetails(id: number) {
    this.router.navigate(['service/', id]);
  }

  addService() {
    this.router.navigate(['service/add-service']);
  }
}
