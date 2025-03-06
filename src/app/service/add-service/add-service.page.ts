import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCard,
  IonToggle,
} from '@ionic/angular/standalone';
import { ServiceService } from 'src/app/share/services/service.service';
import { Service } from 'src/app/share/models/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
    IonCard,
    IonButton,
    IonCardTitle,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonInput,
    IonItem,
    IonList,
  ],
})
export class AddServicePage implements OnInit {
  private router = inject(Router);
  private serviceService = inject(ServiceService);

  addServiceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    disponibility: new FormControl<boolean>(true),
  });

  ngOnInit() {}

  onSubmit() {
    let services = this.serviceService.Services();
    console.log(services);
    const { id, imgUrl } = services[services.length - 1];
    let newService = {
      id: id + 1,
      imgUrl: imgUrl,
      name: this.addServiceForm.value.name,
      price: this.addServiceForm.value.price,
      disponibility: this.addServiceForm.value.disponibility,
    };
    this.serviceService.postService(newService as Service);
    this.router.navigate(['service']);
  }
}
