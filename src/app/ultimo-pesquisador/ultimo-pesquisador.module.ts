import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UltimoPesquisadorPage } from './ultimo-pesquisador.page';

const routes: Routes = [
  {
    path: '',
    component: UltimoPesquisadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UltimoPesquisadorPage]
})
export class UltimoPesquisadorPageModule {}
