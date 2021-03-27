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
  size: number = 3
  btnFilter: string = ""
  productSelect:string

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.btnFilter ="none"
    this.Products()
  }

  Products(){
      this.apiService.GetProducts().subscribe(
         res => {
          this.listProduct = res
          console.log(this.listProduct);
         }
      )
  }

  FilterProduct(f : NgForm){
     console.log(f);
  }

  filterCategory(){
    //console.log(this.t);
  }

  f(){

    if(this.productSelect == "categoria"){
      this.apiService.typeFilter("categoria")
    }
    else if(this.productSelect = "nombre"){
      this.apiService.typeFilter("nombre")
    }
  
    
    // console.log("nombre---", this.chkName);
   //  console.log("categoria" , this.chkCategorie);
    //console.log(v1.value);
    
    /* if(this.chkName ){
      this.chkCategorie = false
      console.log("Nombre esta en true");
      this.apiService.typeFilter("nombre")
      console.log(this.apiService.filterType);
    }
    else if(this.chkCategorie){
     
      console.log("cate esta en true");
      this.apiService.typeFilter("categoria")
      console.log(this.apiService.filterType);
    }

    if(!this.chkName && !this.chkCategorie){
      //this.apiService.typeFilter("nombre")
      alert("Por favor elije un filtro")
    } */
  }

  formFilter(f : NgForm){
      console.log(f);
  }

}
