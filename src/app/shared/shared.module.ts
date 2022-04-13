import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@apps/shared/services/http.service';
import { ModalComponent } from '@apps/shared/components/modal/modal.component';

@NgModule({
  declarations: [TableComponent, ModalComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
   exports: [TableComponent],
    providers: [HttpService]
})
export class SharedModule { }
