import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardDataService} from '../card-data.service';
import { FixedPersonalData } from '../model/fixed-personal-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixed-user-information',
  templateUrl: './fixed-user-information.component.html',
  styleUrls: ['./fixed-user-information.component.scss']
})
export class FixedUserInformationComponent implements OnInit, OnDestroy {

  fixedPersonalData: FixedPersonalData;
  portrait: any;

  subscriptions = [];

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.subscriptions.push(
      this.cardDataService.getFixedPersonalData().subscribe(data => {
        console.log('fixedPersonalData!');
        this.fixedPersonalData = data;
      })
    );

    this.subscriptions.push(
      this.cardDataService.getPortrait().subscribe(data => {
        console.log('portrait!');
        this.portrait = data;
      })
    );
  }

  ngOnDestroy(): void {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}
