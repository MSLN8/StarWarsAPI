import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
})
export class StarshipsListComponent implements OnInit {
  currentStarship = null;
  myImage: any;
  starships = [];
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.starshipService.ship.length === 0) {
      this.starshipService.getAll(
        'ship',
        'https://swapi.dev/api/starships/?page=1'
      );
    }
    this.retrieveStarships();
  }

  retrieveStarships() {
    this.starships = this.starshipService.ship;
  }

  navigate(url: string) {
    const id = url.split('/').splice(-2, 1);
    this.router.navigate(['/starships' + '/' + id]);
  }
}
