import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { DocumentData } from './model/document-data';
import { FixedPersonalData } from './model/fixed-personal-data';
import { VariablePersonalData } from './model/variable-personal-data';
import { Portrait } from './model/portrait';


@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private readonly BASE_URL = 'https://localhost:44373/';

  constructor(private httpClient: HttpClient) { }

  getDocumentData(): Observable<DocumentData> {
    return this.httpClient.get<DocumentData>(this.BASE_URL + 'v1/card-reader-api/document-data');
  }

  getFixedPersonalData(): Observable<FixedPersonalData> {
    return this.httpClient.get<FixedPersonalData>(this.BASE_URL + 'v1/card-reader-api/fixed-personal-data');
  }

  getVariablePersonalData(): Observable<VariablePersonalData> {
    return this.httpClient.get<VariablePersonalData>(this.BASE_URL + 'v1/card-reader-api/variable-personal-data');
  }

  getPortrait(): Observable<Portrait> {
    return this.httpClient.get<Portrait>(this.BASE_URL + 'v1/card-reader-api/portrait');
  }
}
