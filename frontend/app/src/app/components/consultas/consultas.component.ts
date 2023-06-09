import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  promedioResultados: any[] = [];
  numeroResultados: number | undefined; 
  ubicacion: string = ''; 

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  }

  consultarPromedio() {
    this.productoService.consultarPromedio().subscribe(
      (data: any) => {
        this.promedioResultados = data;
      },
      (error: any) => {
        console.error('Error al consultar el promedio:', error);
      }
    );
  }

  consultarNumero() {
    if (this.ubicacion) {
      this.productoService.consultarNumero(this.ubicacion).subscribe(
        (data: any) => {
          this.numeroResultados = data;
        },
        (error: any) => {
          console.error('Error al consultar el número:', error);
        }
      );
    }
  }
}
