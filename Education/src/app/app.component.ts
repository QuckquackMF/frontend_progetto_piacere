import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common'; // Import CommonModule for ngIf, ngFor etc.
import { ApiserviceService } from './service'; // Correct path to service
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, JsonPipe, FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Flask API Frontend';
    apiResponse: any;
    searchTerm: string = '';

    constructor(private _apiservice: ApiserviceService) { }

    ngOnInit() {
        this.callHome();
    }

    callHome() {
        this._apiservice.getHome().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callAllData() {
        this._apiservice.getAllData().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callNames() {
        this._apiservice.getNames().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callProfession() {
        this._apiservice.getProfession().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callDegree() {
        this._apiservice.getDegree().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callRanking() {
        this._apiservice.getRanking().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callRandomPerson() {
        this._apiservice.getRandomPerson().subscribe(res => {
            this.apiResponse = res;
        });
    }

    callSearch() {
        if (this.searchTerm) {
            this._apiservice.searchByName(this.searchTerm).subscribe(res => {
                this.apiResponse = res;
            });
        } else {
            this.apiResponse = { message: "Please enter a search term." };
        }
    }
}