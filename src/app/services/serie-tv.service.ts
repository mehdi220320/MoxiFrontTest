import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Serie} from '../models/Serie';


@Injectable({
  providedIn: 'root'
})
export class SerieTvService {
  private apiUrl = 'https://streaming-n1q3.onrender.com/serieTv';

  constructor(private http: HttpClient) { }

  getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${this.apiUrl}/all`);
  }
  addSerie(serieData:FormData):Observable<Serie>{
    return  this.http.post<Serie>(this.apiUrl+"/add",serieData)
  }
}
