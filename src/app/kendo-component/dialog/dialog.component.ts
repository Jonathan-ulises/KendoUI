import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public abierto = false;

  constructor() { 
    this.cerrarNave();
  }

  ngOnInit(): void {
  }

  public cerrar( status : string ) {
    console.log('Resultado Dialog:', status);
    this.abierto = false;
  }

  public abrir() {
    this.abierto = true;
  }

  @HostListener('window:onbeforeunload', ['$event'])
  public cerrarNave( event? ){
    console.log(event);
    console.log('cerrado');
    window.open("https://www.argar.cat", "Diseño Web", "width=300, height=200");
  }
}
