import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGrindComponent } from './data-grind/data-grind.component';

//GRID
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DataTreeComponent } from './data-tree/data-tree.component';

//TREEVIEW
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PopupComponent } from './popup/popup.component';

//PopUp
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogComponent } from './dialog/dialog.component';

//Dialog
import { DialogModule } from '@progress/kendo-angular-dialog';

//Basic Button
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    DataGrindComponent,
    DataTreeComponent,
    PopupComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    TreeViewModule,
    PopupModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
  ]
})
export class KendoModule { }
