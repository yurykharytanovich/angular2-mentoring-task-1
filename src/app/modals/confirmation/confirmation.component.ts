import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent {

  @Output() public confirmationResponse = new EventEmitter();

  constructor() { }

  onResponseClick(response) {
    this.confirmationResponse.emit({response});
  }
}
