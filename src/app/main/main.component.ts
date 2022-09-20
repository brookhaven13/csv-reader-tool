import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  csvData: any;

  constructor() {}

  ngOnInit(): void {}

  loadCsvData(data: Array<string>) {
    // get csv file data from upload-button component emitter
    this.csvData = data;
  }

  parseRawData(data: Array<string>) {
    // Todo
  }
}
