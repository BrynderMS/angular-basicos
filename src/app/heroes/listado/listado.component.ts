import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Iron Man','Spider-Man','Doctor Strange', 'Hulk'];
  heroeborrado: string = '';

  borrarHeroe(): void{
    if (this.heroes.length>0) {
      this.heroeborrado = this.heroes.pop() || '';
      console.log('borrando: ' + this.heroeborrado);
    }else
    {
      console.log("nada que borrar");
      this.heroeborrado = '';
    }
    
  }

}
