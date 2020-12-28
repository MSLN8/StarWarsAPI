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
    this.getStarship(this.route.snapshot.paramMap.get('id'));
  }

  getStarship(id): void {
    this.starshipService.get(id).subscribe(
      (data) => {
        this.currentStarship = data;
        this.pilots = data.pilots;
        this.pilots.forEach((element) => this.getPilots(element));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPilots(url): void {
    const id = url.split('/').splice(-2, 1);
    this.starshipService.getPilot(id).subscribe(
      (data) => {
        this.pilotsProfile.push(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/starships']);
  }
  navigate(url: string) {
    const id = url.split('/').splice(-2, 1);
    this.router.navigate(['/people' + '/' + id]);
  }
}
