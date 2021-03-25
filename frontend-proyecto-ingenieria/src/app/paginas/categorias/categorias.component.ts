import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];

  constructor(private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {

    this.obtenerCategorias();

  }

  obtenerCategorias() {
    this.serviceCategoria.obtenerCategorias().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.categorias = data
      }

    });
  }

}
