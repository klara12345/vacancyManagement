import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HrCandidateModel} from "../models/hrCandidate.model";

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  private url = 'http://localhost:3000/blacklist';

  constructor(private http: HttpClient) { }

  getAll(): Observable<BlacklistService[]> {
    return this.http.get<BlacklistService[]>(this.url)
  }

  getElementById(id: number): Observable<HrCandidateModel> {
    return this.http.get<HrCandidateModel>(this.url)
  }
  update(id: number, body: any) {
    return this.http.put<BlacklistService>(this.url, body);
  }

  create(blService: BlacklistService): Observable<BlacklistService> {
    return this.http.post<BlacklistService>(this.url, blService)
  }
}
