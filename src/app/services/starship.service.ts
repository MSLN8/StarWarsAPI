import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  starships$: Observable<any>;
  pilots$: Observable<any>;
  people = [];
  ship = [];
  constructor(private http: HttpClient) {}

  async getAll(id: string, url: string) {
    if (id === 'ship') {
      this.starships$ = await this.http.get(url).pipe(shareReplay(1));
      this.starships$.subscribe((data) => {
        data.results.forEach((ship) => {
          const {
            name,
            url,
            created,
            cost_in_credits,
            model,
            manufacturer,
            length,
            max_atmosphering_speed,
            pilots,
          } = ship;
          this.ship.push({
            name,
            url,
            created,
            cost_in_credits,
            model,
            manufacturer,
            length,
            max_atmosphering_speed,
            pilots,
          });
        });
        if (data.next) {
          this.getAll('ship', data.next);
        } else {
          return this.ship;
        }
      });
    }
    if (id === 'pilot') {
      this.pilots$ = await this.http.get(url).pipe(shareReplay(1));
      this.pilots$.subscribe((data) => {
        data.results.forEach((person) => {
          const { name, url, height, eye_color, hair_color, gender } = person;
          this.people.push({
            name,
            url,
            height,
            eye_color,
            hair_color,
            gender,
          });
        });
        if (data.next) {
          this.getAll('pilot', data.next);
        } else {
          return this.people;
        }
      });
    }
  }
}
