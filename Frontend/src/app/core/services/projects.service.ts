import { Injectable } from "@angular/core";
import { environment } from "@app/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

const PROXY_URL = "https://api.allorigins.win/raw?url=";
@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http
      .get<any>(`${PROXY_URL}${encodeURIComponent(environment.STRAPI_HOST + '/api/projects?fields[0]=title&fields[1]=description&fields[2]=repo_url&fields[3]=live_url&populate[image][fields][0]=url&populate[technologies][fields][0]=name')}`)
      .pipe(
        map((response) => response.data)
      );
  }
}
