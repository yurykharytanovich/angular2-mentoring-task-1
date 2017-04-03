import { NgModule } from '@angular/core';

import { BorderFreshDirective } from './border-fresh';

@NgModule({
    declarations: [
        BorderFreshDirective
    ],
    exports: [
        BorderFreshDirective
    ]

})
export class DirectivesModule { }
