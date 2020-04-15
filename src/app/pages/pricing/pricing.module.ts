import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
