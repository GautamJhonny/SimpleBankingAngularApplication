import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RegisterComponent } from './register/register.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CusnamelistComponent } from './cusnamelist/cusnamelist.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'register',component:RegisterComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'transaction', component: TransactionComponent },
  {path: 'dashboard', component:DashboardComponent
},
{ path: 'createcus', component: CustomerCreateComponent },
  { path: 'viewcus', component: CustomerListComponent },
  { path: 'updatecus/ :cid', component: CustomerEditComponent },
  { path: 'cusnamelist', component: CusnamelistComponent },

]
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
