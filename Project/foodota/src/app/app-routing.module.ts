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

const routes: Routes = [
{path:'' ,redirectTo:'home' ,pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'contact',component:ContactusComponent},
{path:'item',component:ItemMenuComponent},
{path:'cart',component:CartComponent},
{path:'logout',component:LogoutComponent},
{path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
