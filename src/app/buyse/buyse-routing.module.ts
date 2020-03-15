import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuysePage } from './buyse.page';

const routes: Routes = [
  {
    path: '',
    component: BuysePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuysePageRoutingModule {}
