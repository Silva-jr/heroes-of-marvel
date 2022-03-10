import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsComponent implements OnInit {
  dataDetails: any;
  constructor(
    private securityService: SecurityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.getById(this.route.snapshot.params.id);
  }

  async getById(id: number) {
    this.securityService.getDetails().subscribe((value: any) => {
      this.dataDetails = value.find((el) => el.id == id);
      console.log(this.dataDetails);
    });

    
  }
}
