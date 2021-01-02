import { Component, OnInit } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.scss'],
})
export class PilotDetailsComponent implements OnInit {
  currentPilot = null;
  constructor(
    private starshipService: StarshipService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPilot(this.route.snapshot.paramMap.get('id'));
  }
  getPilot(id): void {
    this.starshipService.people.map(
      (onePilot) => {
        let url = onePilot.url.split('/').splice(-2, 1);
        if (url[0] === id) {
          this.currentPilot = onePilot;
          return this.currentPilot;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/starships']);
  }
  previousPage() {
    window.history.back();
  }
}
