import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuysePageRoutingModule } from './buyse-routing.module';

import { BuysePage } from './buyse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuysePageRoutingModule
  ],
  declarations: [BuysePage]
})
export class BuysePageModule {}
