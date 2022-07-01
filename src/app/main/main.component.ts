import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() csvData: any;

  constructor() {}

  ngOnInit(): void {}

  onLoadCsvData(csvData: any) {
    this.parseRawData(csvData);
  }

  parseRawData(csvData: Array<any>) {
    let splitLine = [];
    let rawData = [];
    let datasets: any = {
      data: []
    };

    for(let i = 6; i < csvData.length; i++) {
      splitLine = csvData[i].split(',');
      let x = parseFloat(splitLine[0]);
      let y = parseFloat(splitLine[1]);
      if (csvData[i] === ',,') {
        rawData.push(datasets);
        datasets = {
          data: []
        }
      } else if (isNaN(x) || isNaN(y)) {
        // do nothing
        // console.log(x, y);
      } else {
        datasets.data.push({x, y});
      }
    }
  }
}
