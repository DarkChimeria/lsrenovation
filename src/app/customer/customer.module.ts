import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';

import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    TableModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule]
})
export class CustomerModule { }
