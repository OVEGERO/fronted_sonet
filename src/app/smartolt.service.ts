import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Onu } from './onu';

@Injectable({
  providedIn: 'root'
})
export class SmartoltService {

  private socket: any;
  private url = 'https://full-app-sonet.onrender.com';
  private onus: Observable<Onu[]>;

  constructor() {
    this.socket = io(this.url);
    this.onus = new Observable<Onu[]>(observer => {
      this.socket.on('onus', (data: Onu[]) => observer.next(data) );
    });
  }

  getOnus(): Observable<Onu[]> {
    return this.onus;
  }

}