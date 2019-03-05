import { Component, OnInit } from '@angular/core';
import { PersonInfo, States, Occupations } from './../person';
import { PersonLogic } from './../person-logic';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  person: PersonInfo;
  persons: PersonInfo[];
  logic: PersonLogic;
  states = States;
  occupations = Occupations;
  tableColumns: any[];

  constructor() {
    this.person = new PersonInfo(0, '', '', '', '', '');
    this.persons = new Array();
    this.logic = new PersonLogic();
    this.tableColumns = new Array();
  }

  ngOnInit() {
    for (let p in this.person) {
      this.tableColumns.push(p);
    }
    this.persons = this.logic.getPersonsInfo();
  }
  clear(): void {
    this.person = new PersonInfo(0, '', '', '', '', '');
  }
  save(): void {
    this.logic.savePersonInfo(this.person);
  }
  getSelectedData(p: PersonInfo): void {
    this.person = Object.assign({}, p);
  }
}
