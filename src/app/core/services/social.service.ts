import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Social } from '../models/social.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http: HttpClient) { }

  getSocialLinks(): Observable<Social[]> {
    return this.http.get<{ data: Social[] }>(environment.apiUrl+"/socials").pipe(
      map(response => response.data.sort((a, b) => a.id - b.id)) // Ordenar por id ascendente
    );
  }
}
