import { Component } from '@angular/core';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.css')],
	providers: []
})
export class HeaderComponent {

	public query: string = '';
	constructor() {

	}

	onFindClick() {
		console.log(this.query)
	}
}
