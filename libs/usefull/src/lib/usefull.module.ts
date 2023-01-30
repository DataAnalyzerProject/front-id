import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialInputComponent } from './special-input/special-input.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HttpClientModule } from '@angular/common/http';
import {rxStompServiceFactory} from "./rx-stomp-service-factory";
import {RxStompService} from "./rx-stomp.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    imports: [CommonModule, MatProgressBarModule, HttpClientModule, MatProgressBarModule, MatFormFieldModule, MatIconModule, FormsModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule],
  declarations: [SpecialInputComponent],
  exports: [SpecialInputComponent],
  providers: [
    {
    provide: RxStompService,
    useFactory: rxStompServiceFactory
  } ]
})
export class UsefullModule {}
