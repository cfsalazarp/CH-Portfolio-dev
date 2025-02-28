import { Injectable } from "@angular/core";
import { environment } from "@app/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { SoftSkill } from "../models/softSkill.model";

const PROXY_URL = "https://api.allorigins.win/raw?url=";

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
  constructor(private http: HttpClient) {}
  
    getSoftSkills() {
      return this.http
        .get<any>(`${PROXY_URL}${encodeURIComponent(environment.STRAPI_HOST + '/api/skills?fields[0]=name&fields[1]=description&sort[0]=id:asc')}`)
        .pipe(
          map((response) => response.data)
        );
    }
}
