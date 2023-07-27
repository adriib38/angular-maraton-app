import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RunnersComponent } from './runners/runners.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RunnerDetailComponent } from './runner-detail/runner-detail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'runners', component: RunnersComponent },
  { path: 'runners/:id', component: RunnerDetailComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
