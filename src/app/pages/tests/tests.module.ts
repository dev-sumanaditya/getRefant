import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    TestsRoutingModule
  ]
})
export class TestsModule { }
