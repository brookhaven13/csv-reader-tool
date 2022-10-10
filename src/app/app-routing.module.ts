import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
