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
    this.starshipService.getPilot(id).subscribe(
      (data) => {
        this.currentPilot = data;
        console.log(data);
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
