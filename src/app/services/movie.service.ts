import { Injectable } from '@angular/core';
import {Movie} from '../models/Movie';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://streaming-n1q3.onrender.com/movie';

  constructor(private http: HttpClient) { }


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/all`);
  }
  addMovie(movieData:FormData):Observable<Movie>{
    return  this.http.post<Movie>(this.apiUrl+"/add",movieData)
  }


}
