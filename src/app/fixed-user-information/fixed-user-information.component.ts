import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardDataService} from '../card-data.service';
import { FixedPersonalData } from '../model/fixed-personal-data';
import { Observable } from 'rxjs';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fixed-user-information',
  templateUrl: './fixed-user-information.component.html',
  styleUrls: ['./fixed-user-information.component.scss']
})
export class FixedUserInformationComponent implements OnInit, OnDestroy {

  fixedPersonalData: FixedPersonalData;
  portrait: any;
  allDone: boolean;

  subscriptions = [];

  constructor(private cardDataService: CardDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.subscriptions.push(
      this.cardDataService.getFixedPersonalData().subscribe(fixedPersonalData => {
        console.log('fixedPersonalData!');
        this.fixedPersonalData = fixedPersonalData;

        this.subscriptions.push(
          this.cardDataService.getPortrait().subscribe(portrait => {
            this.portrait = portrait;
            this.allDone = true;
          })
        );
      })
    );
  }

  public getSanitizeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy(): void {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}
