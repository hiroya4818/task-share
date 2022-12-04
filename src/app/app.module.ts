import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberEditComponent,
    MessagesComponent,
    PaymentComponent,
    PaymentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
