import { Injectable, signal, WritableSignal } from '@angular/core';
import { Service, Services } from '../models/service';

const SERVICE = [
  {
    id: 1,
    imgUrl: '/assets/icon/Calidda.jpg',
    name: 'Gas Calidda',
    price: 50,
    disponibility: true,
  },
  {
    id: 2,
    imgUrl: '/assets/icon/netflix.jpg',
    name: 'Netflix',
    price: 50,
    disponibility: true,
  },
  {
    id: 1,
    imgUrl: '/assets/icon/onlyfans.jpg',
    name: 'OnlyFans',
    price: 50,
    disponibility: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private _services = signal<Services>(SERVICE);

  get Services(): WritableSignal<Services> {
    return this._services;
  }

  postService(service: Service) {
    this._services.update((services) => [...services, service]);
  }
}
