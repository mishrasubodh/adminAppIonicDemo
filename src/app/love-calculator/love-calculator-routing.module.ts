import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoveCalculatorPage } from './love-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: LoveCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoveCalculatorPageRoutingModule {}
