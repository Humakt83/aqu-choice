import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    private plantsUrl = 'http://localhost:8888/plants'; 

    constructor (private http: Http) {}

    getPlants() : Observable<Plant[]> {
        return this.http.get(this.plantsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response): Plant[] {
        let plants: Plant[] = [];
        res.json().forEach((part: any) => plants.push(Plant.fromJSON(part)));
        return plants;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
