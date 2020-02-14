import { Component, OnInit, OnDestroy } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { CardDataService} from '../card-data.service';

import { DocumentData } from '../model/document-data';
import { FixedPersonalData } from '../model/fixed-personal-data';
import { VariablePersonalData } from '../model/variable-personal-data';
import { Portrait } from '../model/portrait';

@Component({
  selector: 'app-fixed-user-information',
  templateUrl: './fixed-user-information.component.html',
  styleUrls: ['./fixed-user-information.component.scss']
})
export class FixedUserInformationComponent implements OnInit, OnDestroy {

  fixedPersonalData: FixedPersonalData;
  documentData: DocumentData;
  variablePersonalData: VariablePersonalData;
  portrait: Portrait;
  allDone: boolean;

  subscription: any;

  constructor(private cardDataService: CardDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription = forkJoin(
      this.cardDataService.getDocumentData(),
      this.cardDataService.getFixedPersonalData(),
      this.cardDataService.getVariablePersonalData(),
      this.cardDataService.getPortrait()
    ).subscribe(
      (([documentData, fixedPersonalData, variablePersonalData, portrait] :
        [DocumentData, FixedPersonalData, VariablePersonalData, Portrait]) => {
          this.documentData = documentData;
          this.fixedPersonalData = fixedPersonalData;
          this.variablePersonalData = variablePersonalData;
          this.portrait = portrait;
          this.allDone = true;
        }
      )
    );
  }

  public getSanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
