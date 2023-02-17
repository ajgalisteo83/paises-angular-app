import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get getHttpParams() {
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string) : Observable<Country[]> {

    const url = `${this.apiURL}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.getHttpParams});
  }

}
