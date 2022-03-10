import { SecurityService } from './../security/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataHeroes: any[];  
  dataVillains: any;
  dataAntiHeroes: any;
  dataAliens: any;
  dataHumans: any;
  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
    this.getAliens();
    this.getAntiHeroes();
    this.getHumans();
  }

  getHeroes() {
    this.securityService.getHeroes().subscribe((value: any) => {
      this.dataHeroes = value;
    });
  }


  getVillains() {
    this.securityService.getVillains().subscribe((value: any) => {
      this.dataVillains = value;
      console.log(this.dataVillains)
    });
  }
  getAntiHeroes() {
    this.securityService.getAntiHeroes().subscribe((value: any) => {
      this.dataAntiHeroes = value;
    });
  }
  getAliens() {
    this.securityService.getAliens().subscribe((value: any) => {
      this.dataAliens = value;
    });
  }

  getHumans() {
    this.securityService.getHumans().subscribe((value: any) => {
      this.dataHumans = value;
    });
  }
}
