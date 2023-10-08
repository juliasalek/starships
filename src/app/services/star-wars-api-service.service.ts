import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, share, throwError } from 'rxjs';

// move to other file
export interface HumanResponse {
  message: string;
  result: {
    properties: Human;
  };
}

export interface StarshipResponse {
  message: string;
  result: {
    properties: Starship;
  };
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

export interface Human {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiServiceService {
  private url = 'https://www.swapi.tech/api';

  constructor(private http: HttpClient) {}

  public getHumanById(id: string): Observable<Human> {
    return this.http.get<HumanResponse>(`${this.url}/people/${id}`).pipe(
      share(),
      catchError(this.handleError),
      map((res) => res.result.properties)
    );
  }

  public getStarshipById(id: string): Observable<Starship> {
    return this.http.get<StarshipResponse>(`${this.url}/starships/${id}`).pipe(
      share(),
      catchError(this.handleError),
      map((res) => res.result.properties)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
