import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './invoice-routing.module';

import { InvoiceComponent } from './invoice.component';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SplitButtonModule } from 'primeng/splitbutton';


@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    TableModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    SelectButtonModule,
    ListboxModule,
    ScrollPanelModule,
    SplitButtonModule
  ]
})
export class InvoiceModule { }
