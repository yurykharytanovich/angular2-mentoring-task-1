import { NgModule } from '@angular/core';
import { LoaderBlockComponent } from './loader-block.component';
import { RouterModule } from '@angular/router';
import {LoginService} from "../../../services/login.service";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoaderBlockComponent],
    imports: [RouterModule, CommonModule],
    exports: [LoaderBlockComponent],
    providers: [{provide:'loginService', useClass:LoginService}]

})
export class LoaderBlockModule {
    constructor() {
    }
}
