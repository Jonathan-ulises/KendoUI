import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGrindComponent } from './kendo-component/data-grind/data-grind.component';
import { DataTreeComponent } from './kendo-component/data-tree/data-tree.component';
import { PopupComponent } from './kendo-component/popup/popup.component';
import { DialogComponent } from './kendo-component/dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: DataGrindComponent
  },
  {
    path: 'data-tree',
    component: DataTreeComponent
  },
  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
