import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MembersComponent } from './members/members.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'payment', component: PaymentComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
