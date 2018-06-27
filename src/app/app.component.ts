import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  location = '';
  userSettings = { showCurrentLocation: false };
  selectedData = {
    response: false,
    data: {}
  };

  constructor() {}
  ngOnInit() {}

  autoCompleteCallback1(selectedData: any) {
    this.selectedData = selectedData;
    if (selectedData.response === true) {
      this.location = selectedData.data.name;
    } else {
      this.location = '';
      this.selectedData = {
        response: false,
        data: {}
      };
    }
  }

  searchListings() {
    if (this.location !== null) {
      console.log(`You will be traveling to ${this.location} on July 3 with 2 guests, and returning on July 21. Have Fun!`);
    } else {
      // Throw validation Error
    }
  }

  noRecomendations() {
    return this.selectedData.response === false;
  }
}
