import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import {ProductUI} from '../Interfaces/product.interface'
import  sweet from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly URL = "https://localhost:44377/api/products";

  constructor(private http : HttpClient ) { }

   GetProducts():Observable<ProductUI>{
      return this.http.get<ProductUI>(this.URL)
        
  }

  InsertNewProduct( product : ProductUI){
    const dataProduct = {
      nombre: product.nombre,
      precio: product.precio,
      descripcion: product.descripcion,
      imagen: product.imagen,
      categpria : product.categpria
    }
    return this.http.post(this.URL, dataProduct)
    .pipe(
       map((response: any) =>{
         console.log(response);
         sweet.fire({
           icon: "success",
           text: response.message
         })
       }),
       catchError( err => of(console.log(err)))
    )
    }

    UpdateProduct(product: ProductUI, id : number){

      const dataproduct = {
        id : id,
        nombre: product.nombre,
        precio: product.precio,
        descripcion: product.descripcion,
        imagen: product.imagen,
        categpria: product.categpria
      }
      return this.http.put(`${this.URL}/${id}`, dataproduct)
      .pipe(
        map((response: any) =>{
          console.log(response);
          sweet.fire({
            icon: "success",
            text: response.message
          })
        }),
        catchError( err => of(console.log(err)))
     )
    }
    SearchProductById(id : number): Observable<ProductUI>{
      return this.http.get<ProductUI>(`${this.URL}/${id}`)
    }

    DeleteProduct(id: number){
      return this.http.delete(`${this.URL}/${id}`)
       .pipe(
         map((response: any) =>{
            sweet.fire({
              icon: "success",
              text: response.message
            })
         })
       )
    }


}
