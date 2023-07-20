import { Component, OnInit } from '@angular/core';
import { SmartoltService } from '../smartolt.service';
import { Onu } from '../onu';

@Component({
  selector: 'app-first-list',
  templateUrl: './first-list.component.html',
  styleUrls: ['./first-list.component.css']
})
export class FirstListComponent implements OnInit {

  onusStatuses: Onu[] = [];
  onusNuevos: Onu[] = [];
  titleNuevosOnus = 'Nuevas ONUs';
  titleOnus = 'ONUs';
  total = 0;

  constructor(private smartoltService: SmartoltService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.smartoltService.getOnus().subscribe({
      next: (data: any) => this.filtrarOnusNuevos(data),
      error: (error) => console.error('Error obteniendo ONUs: ', error)
    });
  }

  filtrarOnusNuevos(data: Onu[]) {
    this.total = data.length;
    const fechaActual = new Date();
    const onusNuevosTemp: Onu[] = [];
    const onusStatusesTemp: Onu[] = [];

    data.forEach(onu => {
      const fechaOnu = new Date(onu.fecha);
      const esNuevo =
        fechaOnu.getDate() === fechaActual.getDate() &&
        fechaOnu.getMonth() === fechaActual.getMonth() &&
        fechaOnu.getFullYear() === fechaActual.getFullYear();

      if (esNuevo) {
        onusNuevosTemp.push(onu);
      } else {
        onusStatusesTemp.push(onu);
      }
    });

    this.onusNuevos = onusNuevosTemp.sort((a, b) => a.fecha > b.fecha ? -1 : 1);
    this.onusStatuses = onusStatusesTemp.sort((a, b) => a.fecha > b.fecha ? -1 : 1);
  }
  
}
