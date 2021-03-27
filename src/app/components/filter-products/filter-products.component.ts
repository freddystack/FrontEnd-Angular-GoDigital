import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductUI } from 'src/app/Interfaces/product.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {

  
  filter: string;
  listProduct: {} = new ProductUI()
  productSelect:string

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.Products()
  }

  Products(){
      this.apiService.GetProducts().subscribe(
         res =>  this.listProduct = res
      )
  }

  filterNow(){
    if(this.productSelect == "categoria"){
      this.apiService.typeFilter("categoria")
    }
    else if(this.productSelect = "nombre"){
      this.apiService.typeFilter("nombre")
    }
  }
}
