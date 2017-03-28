import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'main-footer',
	templateUrl: './footer.component.html',
	styles: [require('./footer.component.css')],
	providers: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
	constructor() {

	}
}
