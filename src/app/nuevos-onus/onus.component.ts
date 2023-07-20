import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Onu } from '../onu';

@Component({
  selector: 'app-onus',
  templateUrl: './onus.component.html',
  styleUrls: ['./onus.component.css']
})
export class NuevosOnusComponent implements OnChanges {

  @Input() onus: Onu[] = [];
  @Input() title: string = '';
  filtroActivo: string = 'Todas';
  filteredOnus: Onu[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['onus']) {
      this.filtrarOnus(this.filtroActivo);
    }
  }

  filtrarOnus(filtro: string) {
    this.filtroActivo = filtro;
    if (filtro == 'Todas') {
      this.filteredOnus = [...this.onus];
    }
    else if (filtro === 'Power fail') {
      this.filteredOnus = this.onus.filter(onu => onu.status === 'Power fail');
    } else {
      this.filteredOnus = this.onus.filter(onu => onu.status === 'LOS');
    }
  }

}
