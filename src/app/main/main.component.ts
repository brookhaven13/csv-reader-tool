import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  csvData: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}

  loadCsvData(data: Array<string>) {
    // get csv file data from upload-button component emitter
    this.parseRawData(data);
  }

  parseRawData(data: Array<string>) {
    // Todo
    let tmpArr: Array<string> = [];
    data.forEach((e) => {
      tmpArr.push(e);
    });
    this.csvData = tmpArr;
    tmpArr = []; // init arr
  }
}
