import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoursesModule} from "./pages/courses/courses.module";
import {FooterModule} from "./core/components/footer/footer.module";
import {HeaderModule} from "./core/components/header/header.module";
import {LoginService} from "./services/login.service";
import {ModalsModule} from "./modals/modals.module";
import {LoaderBlockModule} from "./core/components/loader-block/loader-block.module";
import {LoaderBlockService} from "./services/loader-block.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoaderBlockModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    FooterModule,
    ModalsModule,
    CoursesModule
  ],
  providers: [
      { provide:'loginService', useClass:LoginService },
      { provide:'loaderBlockService', useClass:LoaderBlockService}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
