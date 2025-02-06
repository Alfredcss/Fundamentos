import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';
  //propiedades
  nombre ='Alejandro';
  aniosServicio= 22;
  email= 'admin@gamil.com';
  activo= false;
  alumnos =[25,24,26];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  //productos
    productos =[
      {
      id: 1,
      descripcion: 'Doritos',
      precio: 25.29
      },
      {
      id: 2,
      descripcion: 'Totis',
      precio: 15.50
      },
      {
      id: 3,
      descripcion: 'Oreo',
      precio: 23.00
      }
    ];

  //funcion que muestra si esta activo o nel

  esActivo(){
    if(this.activo){
      return 'empleado activo';
    }else{
        return 'empleado inativo';
    }
    
  }
  //funcion que sume los elemntos del arreglo de alumnos

  sumarAlumnos(){
    let suma = 0;
    for(let i=0; i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }
generarNumero(){
  return Math.floor(Math.random() * 3) + 1;
}
//funcion que incremente contador
incrementarContador(){
  this.contador++;
}
//funcion que decrementa el contador
decrementarContador(){
  this.contador--;
}
//funcion que cambia el valor de desactivarBoton
cambiarValor(){
  this.desactivarBoton = false;
}

}
