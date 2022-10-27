import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from './models/Usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackjack';

  comenzar : boolean = false;
  inicio : boolean = true;
  usuario = {} as Usuario; 


  constructor(private servicioUsuario: UsuarioService) {
   
    
  }

  comenzarJuego(){
    if(this.usuario.nombreUsuario == "" || this.usuario.password == ""){
      Swal.fire({
        title: 'Error!',
        text: "Debe comnpletar todos los campos",
        icon: 'error',
        allowOutsideClick: false,
        confirmButtonColor: '#4E9F3D'
      });
    }
    else{
      this.servicioUsuario.validarUsuario(this.usuario).subscribe(
        {
          next: (resp) => {
            if(resp){
              this.usuario = resp;
              this.comenzar = true;
              this.inicio = false;
            }
          },
          error: (e: HttpErrorResponse) => {
            if(e.status == 0)
            {
              Swal.fire({
                title: 'Error!',
                text: "Error de comunicación con el servidor",
                icon: 'error',
                allowOutsideClick: false,
                confirmButtonColor: '#4E9F3D'
              });
            }
            if(e.status == 401){
              Swal.fire({
                title: 'Error!',
                text: "Contraseña Incorrecta",
                icon: 'error',
                allowOutsideClick: false,
                confirmButtonColor: '#4E9F3D'
              });
            }
            if(e.status == 404){
              Swal.fire({
                title: 'Error!',
                text: "Usuario Inexistente",
                icon: 'error',
                allowOutsideClick: false,
                confirmButtonColor: '#4E9F3D'
              });
            }
          }
        }
        )
    
    }
   
  }
  finalizar(event : boolean){
    this.comenzar = false;
    this.inicio = true;
  }
}
