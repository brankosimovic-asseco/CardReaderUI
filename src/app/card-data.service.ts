import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixedPersonalData } from './model/fixed-personal-data';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(private httpClient: HttpClient) { }

  getFixedPersonalData(): Observable<FixedPersonalData> {
    return this.httpClient.get<FixedPersonalData>('localhost:6604/v1/card-reader/fixed-personal-data');
  }

  getPortraitData() {
    return this.httpClient.get('localhost:6604/v1/card-reader/portrait');
  }
}
