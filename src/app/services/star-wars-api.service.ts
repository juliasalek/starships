import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, share, throwError } from 'rxjs';
import {
  Human,
  HumanResponse,
  Starship,
  StarshipResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
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
