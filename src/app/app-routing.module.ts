import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path:"page1",
    component:Page1Component
  },
  {
    path:"page2",
    component:Page2Component
  },

  {
    path:"page3",
    component:Page3Component
  },
  {  path:"bootstrap",
  component:BootstrapComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
