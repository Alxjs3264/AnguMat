import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  listUsuarios: Usuario[] = [
    {usuario: "1perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "2perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "3perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "4perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "5perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "6perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
    {usuario: "7perez", nombre: 'Juan', apellido: "perez", sexo: 'M'},
  ]

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1)

  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
