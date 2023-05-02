import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
    this.cargarUsuarios(); 
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService,private _snackBar: MatSnackBar){

  }

  cargarUsuarios(){
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  listUsuarios:Usuario[] = [];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  // dataSource = listUsuarios;
  dataSource!: MatTableDataSource<any>;
  // dataSource = new MatTableDataSource(this.listUsuarios);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
    // return index
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
    this._snackBar.open('Usuario Eliminado','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
