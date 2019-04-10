import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberArrayPipe } from './shared/number-array.pipe';

@NgModule({
  declarations: [
    NumberArrayPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NumberArrayPipe
  ]
})
export class BooksTestingModule { }
