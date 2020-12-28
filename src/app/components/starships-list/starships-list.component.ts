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
  starships: any;
  constructor(
    private starshipService: StarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveStarships();
  }

  retrieveStarships(): void {
    this.starshipService.getAll().subscribe(
      (data) => {
        this.starships = data.results;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  navigate(url: string) {
    const id = url.split('/').splice(-2, 1);
    this.router.navigate(['/starships' + '/' + id]);
  }
}
