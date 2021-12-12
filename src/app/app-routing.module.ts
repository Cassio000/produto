import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { InstitucionalComponent } from './views/institucional/institucional.component';
import { VazioComponent } from './views/vazio/vazio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'jogos',
    component: JogosComponent,
  },
  {
    path: 'institucional',
    component: InstitucionalComponent,
  },
  {
    path: 'vazio',
    component: VazioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
