import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, TableModule, ButtonModule, ChartModule]
})
export class HomeModule { }
