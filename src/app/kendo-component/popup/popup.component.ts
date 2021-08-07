import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
    `
      .content {
        padding: 30px;
        color: #787878;
        background-color: #fcf7f8;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
    `
  ]
})
export class PopupComponent {

  public toggleText = "Show";
  public show = false;

  public onToggle() : void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hide" : "Show";
  }
}
