import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

const routes: Routes = [
{path:'' ,redirectTo:'home' ,pathMatch:'full'},
{path:'home/:id',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'contact',component:ContactusComponent},
{path:'item/:id',component:ItemMenuComponent},
{path:'cart/:id',component:CartComponent},
{path:'logout',component:LogoutComponent},
{path:'payment/:id',component:PaymentComponent},
{path:'account/:id',component:AccountComponent},
{path:'admin',component:AdminComponent},
{path:'adminconsole',component:AdminconsoleComponent},
{path:'customerdetails',component:CustomerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
