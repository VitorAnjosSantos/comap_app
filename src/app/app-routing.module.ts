import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'ultimo-pesquisador', loadChildren: './ultimo-pesquisador/ultimo-pesquisador.module#UltimoPesquisadorPageModule' },
  { path: 'novo-pesquisador', loadChildren: './novo-pesquisador/novo-pesquisador.module#NovoPesquisadorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
