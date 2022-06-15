import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardregisterComponent } from './components/cardregister/cardregister.component';

const routes: Routes = [
  {path:'register', component:CardregisterComponent},
  {path:'login', component:CardLoginComponent},
  {path:'list', component:CardListComponent},
  {path:'detail/:id', component:CardDetailComponent},
  {path:'',pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
