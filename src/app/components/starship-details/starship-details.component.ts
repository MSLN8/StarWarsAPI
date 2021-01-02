import { Component, OnInit } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
})
export class StarshipDetailsComponent implements OnInit {
  currentStarship = null;
  pilots = [];
  pilotsProfile = [];

  constructor(
    private starshipService: StarshipService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.starshipService.people.length === 0) {
      this.starshipService.getAll(
        'pilot',
        'https://swapi.dev/api/people/?page=1'
      );
    }
    this.getStarship(this.route.snapshot.paramMap.get('id'));
  }

  getStarship(id): void {
    this.starshipService.ship.map((oneShip) => {
      let url = oneShip.url.split('/').splice(-2, 1);
      if (url[0] === id) {
        this.currentStarship = oneShip;
        if (oneShip.pilots && this.pilotsProfile.length === 0) {
          oneShip.pilots.map((onePilot) => this.getPilot(onePilot));
        }
        return this.currentStarship;
      }
    });
  }

  getPilot(url) {
    this.pilots = this.starshipService.people;
    this.pilots.map((onePilot) => {
      if (onePilot.url === url) {
        const { name, url } = onePilot;
        this.pilotsProfile.push({ name, url });
        return this.pilotsProfile;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/starships']);
  }
  navigate(url: string) {
    const id = url.split('/').splice(-2, 1);
    this.router.navigate(['/people' + '/' + id]);
  }
}
