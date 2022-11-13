import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhonePage } from './Phone.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PhonePageRoutingModule } from './Phone-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PhonePageRoutingModule
  ],
  declarations: [PhonePage]
})
export class PhonePageModule {}
