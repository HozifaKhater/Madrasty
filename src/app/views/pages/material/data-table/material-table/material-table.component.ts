import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';

import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }
}



@Component({
    selector: 'kt-material-table',
    templateUrl: './material-table.component.html',
    changeDetection: ChangeDetectionStrategy.Default,

})
export class MaterialTableComponent implements OnInit, AfterViewInit {
    Levels: Levels[];
    selectedlevel: any;
    classes: Classes[];
    selectedclass: any; 


    constructor(private LevelsDataService: LevelsDataService, private ClassesDataService: ClassesDataService) {
        this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
            error => console.log(error),
            () => console.log("emp dropdown", this.Levels));
        this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
            error => console.log(error),
            () => console.log("emp dropdown", this.classes));

    }

    exampleBasic;
    examplePagination;
    exampleSorting;
    exampleFiltering;
    exampleSelection;
    exampleHTTP;
    exampleMain;

    displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
    displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
    displayedColumns3: string[] = ['position', 'name', 'weight', 'symbol'];
    displayedColumns4: string[] = ['position', 'name', 'weight', 'symbol'];
    displayedColumns5: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
    displayedColumns6: string[] = ['created', 'state', 'number', 'title'];
    displayedColumns7: string[] = ['id', 'name', 'progress', 'color'];

    dataSource1 = ELEMENT_DATA;
    dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);
    dataSource3 = new MatTableDataSource(ELEMENT_DATA);
    dataSource4 = new MatTableDataSource(ELEMENT_DATA);
    dataSource5 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    dataSource6: GithubIssue[] = [];

    exampleDatabase: ExampleHttpDao | null;

    selection = new SelectionModel<PeriodicElement>(true, []);
    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;


    @ViewChild('matPaginator2', { static: true }) paginator2: MatPaginator;
    @ViewChild('matPaginator6', { static: true }) paginator6: MatPaginator;
    @ViewChild('matPaginator7', { static: true }) paginator7: MatPaginator;


    @ViewChild('sort3', { static: true }) sort3: MatSort;
    @ViewChild('sort6', { static: true }) sort6: MatSort;
    @ViewChild('sort7', { static: true }) sort7: MatSort;

    ngAfterViewInit() {
    }



    ngOnInit() {




        /** Builds and returns a new User. */

    }
}