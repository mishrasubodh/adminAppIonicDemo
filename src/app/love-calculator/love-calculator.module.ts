import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoveCalculatorPageRoutingModule } from './love-calculator-routing.module';

import { LoveCalculatorPage } from './love-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoveCalculatorPageRoutingModule
  ],
  declarations: [LoveCalculatorPage]
})
export class LoveCalculatorPageModule {}
