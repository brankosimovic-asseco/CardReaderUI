import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixedPersonalData } from './model/fixed-personal-data';
import { Portrait } from './model/portrait';
import { DocumentData } from './model/document-data';
import { VariableData } from './model/variable-data';


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
  getDocumentData(): Observable<DocumentData> {
    return this.httpClient.get<DocumentData>('https://localhost:44373/v1/card-reader-api/document-data');
  }
  getVariableData(): Observable<VariableData> {
    return this.httpClient.get<VariableData>('https://localhost:44373/v1/card-reader-api/variable-personal-data');
  }
}
