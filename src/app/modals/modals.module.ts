import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmationComponent
  ],
  declarations: [
      ConfirmationComponent
  ]
})
export class ModalsModule { }
