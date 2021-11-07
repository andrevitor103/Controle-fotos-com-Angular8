import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Photo } from "./photo";

@Injectable({ providedIn: "root" })
export class PhotoService {
  API = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.API}/${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append("page", page.toString());
    return this.http.get<Photo[]>(`${this.API}/${username}/photos`, {
      params: params,
    });
  }
}
