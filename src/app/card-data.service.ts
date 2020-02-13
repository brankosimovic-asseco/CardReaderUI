import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixedPersonalData } from './model/fixed-personal-data';
import { Portrait } from './model/portrait';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private httpClient: HttpClient) { }

  getFixedPersonalData(): Observable<FixedPersonalData> {
    return this.httpClient.get<FixedPersonalData>('https://localhost:44373/v1/card-reader-api/fixed-personal-data');
  }

  getPortrait(): Observable<Portrait> {
    return this.httpClient.get<Portrait>('https://localhost:44373/v1/card-reader-api/portrait');
  }
}
