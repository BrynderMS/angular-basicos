import { TemplateBindingParseResult } from "@angular/compiler";
import { Component } from "@angular/core";
@Component({
    selector: "app-contador",
    templateUrl: "contador.component.html"
//     template: ´
//     <h1>{{titulo}}</h1>
// <h3>La base es: <strong>{{base}}</strong></h3>
// <button (click)="sumar(+1);">+{{base}}</button>
// <span>{{numero}}</span>
// <button (click)="sumar(-1);">-{{base}}</button>
// ´

})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    sumar(valor: number): void {
      this.numero += this.base*valor;
}
}