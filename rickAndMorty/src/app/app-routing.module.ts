import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'page/:page', component: CardComponent },
  { path: 'page/:page', component: CardComponent },
  { path: 'search', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
