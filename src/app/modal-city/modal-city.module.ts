import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalCityPageRoutingModule } from './modal-city-routing.module';
import { ModalCityPage } from './modal-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCityPageRoutingModule
  ],
  declarations: [ModalCityPage]
})
export class ModalCityPageModule {}
