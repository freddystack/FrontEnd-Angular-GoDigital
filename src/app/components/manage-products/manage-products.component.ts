import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductUI } from 'src/app/Interfaces/product.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  product = {} = new ProductUI();
  ID: number;
  //OneProduct: {} = new ProductUI();



  constructor(private apiservise: ApiServiceService,
              private route: Router,
              private activateRoute : ActivatedRoute
                ) { 

  }

  ngOnInit(): void {
    this.ModifyProduct()
    this.ShowOneProduct()
  }

  Save( form : NgForm){

    if(form.invalid){
      Object.values( form.controls ).forEach(e => {
        e.markAllAsTouched()
      })
      return
    }
    this.apiservise.InsertNewProduct(form.value).subscribe()
    form.reset()
     setTimeout(() =>{
      this.route.navigate(['/home'])
     },500)
  }

  ModifyProduct(){
    this.activateRoute.params.subscribe( p => this.ID = p['id'])

    
  //  this.apiservise.UpdateProduct()
  }
  Update(id: number) {
     this.route.navigate(['/register', this.ID])
  }
  Delete(id : number){
    
    this.apiservise.DeleteProduct(id).subscribe()
    setTimeout(() =>{
      this.route.navigate(['/home'])
     },300)

  }

  ShowOneProduct(){
    this.apiservise.SearchProductById(this.ID).subscribe(
      res => {
        this.product = res
        console.log(this.product);
      }
    )
  }

}
