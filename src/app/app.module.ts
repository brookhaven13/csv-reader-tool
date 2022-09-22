import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Material */
import { MatDividerModule } from '@angular/material/divider';

/* Component */
import { AppComponent } from './app.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { MainComponent } from './main/main.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UploadButtonComponent,
    MainComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
