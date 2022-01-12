import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { ResturantComponent } from './resturant/resturant.component';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CakeitemComponent } from './cakeitem/cakeitem.component';
import { BriyaniitemsComponent } from './briyaniitems/briyaniitems.component';
import { DrinkitemsComponent } from './drinkitems/drinkitems.component';
import { IcecreamitemsComponent } from './icecreamitems/icecreamitems.component';
import { PizzaitemsComponent } from './pizzaitems/pizzaitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ContactusComponent,
    ItemMenuComponent,
    CartComponent,
    PaymentComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    ResturantComponent,
    AdminconsoleComponent,
    CustomerdetailsComponent,
    CakeitemComponent,
    BriyaniitemsComponent,
    DrinkitemsComponent,
    IcecreamitemsComponent,
    PizzaitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
