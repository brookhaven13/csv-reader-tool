import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css'],
})
export class UploadButtonComponent implements OnInit {
  @ViewChild('csvReader') csvReader: any;
  @Output() uploadCsvData: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  uploadEventListener($event: any) {
    try {
      let input = $event.target;

      if (this.isValidCsvFile(input.files[0])) {
        let input = $event.target;
        let reader = new FileReader();
        reader.readAsText(input.files[0]);

        reader.onload = () => {
          let data: any = (<string>reader.result).split(/\r\n|\n/);
          this.uploadCsvData.emit(data);
        };
      }
      this.resetFile();
    } catch (error) {
      console.log('error', error);
      this.resetFile();
    }
  }

  isValidCsvFile(file: any) {
    return file.name.endsWith('.csv');
  }

  resetFile() {
    this.csvReader.nativeElement.value = '';
  }
}
