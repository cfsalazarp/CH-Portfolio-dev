import { Injectable } from "@angular/core";
import { environment } from "@app/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

const PROXY_URL = "https://api.allorigins.win/raw?url=";
@Injectable({
  providedIn: "root",
})
export class EducationService {
  constructor(private http: HttpClient) {}

  getEducations() {
    return this.http
      .get<any>(`${PROXY_URL}${encodeURIComponent(environment.STRAPI_HOST + '/api/educations?sort[0]=start_date:desc')}`)
      .pipe(
        map((response) => response.data)
      );
  }
}