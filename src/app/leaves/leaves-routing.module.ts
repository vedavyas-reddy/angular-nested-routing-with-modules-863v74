import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { LeavesComponent } from './leaves.component';
import { PNF404leaveComponent } from './pnf404leave/pnf404leave.component';
import { BalanceModule } from './balance/balance.module';


const routes: Routes = [
  {
    path: '', component: LeavesComponent, children: [
      {
        path: 'apply', component: ApplyComponent
      },
      { path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule) },
      {
        path: '', redirectTo: 'apply', pathMatch: 'full'
      },
      { path: '**', component: PNF404leaveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
