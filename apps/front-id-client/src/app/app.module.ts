import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {UsefullModule} from "@front-id/usefull";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, UsefullModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
