/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  data: any;
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getHeroes(): Observable<any[]> {
    return this.http
      .get<any[]>('/heroes')
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }

  getVillains(): Observable<any[]> {
    return this.http
      .get<any[]>(`/villains`)
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }

  getAntiHeroes(): Observable<any[]> {
    return this.http
      .get<any[]>(`/antiHeroes`)
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }
  getAliens(): Observable<any[]> {
    return this.http
      .get<any[]>(`/aliens`)
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }

  getHumans(): Observable<any[]> {
    return this.http
      .get<any[]>(`/humans`)
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }

  getDetails(): Observable<any[]> {
    return this.http
      .get<any[]>(`/details`)
      .pipe(tap(), catchError(this.handleError('getAll', [])));
  }
}

