import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCityPage } from './modal-city.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCityPageRoutingModule {}
