import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from './service';
import { FormsModule } from '@angular/forms';

// Import all your data display components
import { CallHomeComponent } from './call-home/call-home.component';
import { CallAllDataComponent } from './call-all-data/call-all-data.component';
import { CallDegreeComponent } from './call-degree/call-degree.component';
import { CallNamesComponent } from './call-names/call-names.component';
import { CallProfessionComponent } from './call-profession/call-profession.component';
import { CallRandomComponent } from './call-random/call-random.component';
import { CallRankingComponent } from './call-ranking/call-ranking.component';
import { CallSearchComponent } from './call-search/call-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Import all your data display components here so AppComponent can use them in its template
    CallHomeComponent,
    CallAllDataComponent,
    CallDegreeComponent,
    CallNamesComponent,
    CallProfessionComponent,
    CallRandomComponent,
    CallRankingComponent,
    CallSearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Education Rich People API';
  homeResponse: any;
  allDataResponse: any;
  namesResponse: any;
  professionResponse: any;
  degreeResponse: any;
  rankingResponse: any;
  randomResponse: any;
  searchResponse: any;
  searchTerm: string = '';

  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    // Make initial API calls to populate data for child components
    this.callHome();
    this.callAllData();
    this.callNames();
    this.callProfession();
    this.callDegree();
    this.callRanking();
    this.callRandomPerson();
  }

  // Methods to fetch data from the API service
  callHome() {
    this._apiservice.getHome().subscribe((res: any) => {
      this.homeResponse = res;
    });
  }

  callAllData() {
    this._apiservice.getAllData().subscribe((res: any) => {
      this.allDataResponse = res;
    });
  }

  callNames() {
    this._apiservice.getNames().subscribe((res: any) => {
      this.namesResponse = res;
    });
  }

  callProfession() {
    this._apiservice.getProfession().subscribe((res: any) => {
      this.professionResponse = res;
    });
  }

  callDegree() {
    this._apiservice.getDegree().subscribe((res: any) => {
      this.degreeResponse = res;
    });
  }

  callRanking() {
    this._apiservice.getRanking().subscribe((res: any) => {
      this.rankingResponse = res;
    });
  }

  callRandomPerson() {
    this._apiservice.getRandomPerson().subscribe((res: any) => {
      this.randomResponse = res;
    });
  }

  callSearch() {
    if (this.searchTerm) {
      this._apiservice.searchByName(this.searchTerm).subscribe((res: any) => {
        this.searchResponse = res;
      });
    } else {
      this.searchResponse = { message: "Please enter a search term." };
    }
  }
}