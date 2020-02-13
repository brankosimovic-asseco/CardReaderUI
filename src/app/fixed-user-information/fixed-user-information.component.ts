import { Component, OnInit } from '@angular/core';
import { CardDataService} from '../card-data.service';
import { FixedPersonalData } from '../model/fixed-personal-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixed-user-information',
  templateUrl: './fixed-user-information.component.html',
  styleUrls: ['./fixed-user-information.component.scss']
})
export class FixedUserInformationComponent implements OnInit {

  fixedUserInfo: FixedPersonalData;
  portraitData: any;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
  }

  getData() {
    this.cardDataService.getFixedPersonalData().subscribe(data => {
      this.fixedUserInfo = data;
    });
    this.cardDataService.getPortraitData().subscribe(data => {
      this.portraitData = data;
    });
  }

}
