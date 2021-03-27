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
  private ID: number;

  constructor(private apiservise: ApiServiceService,
              private router: Router,
              private activateRoute : ActivatedRoute
                ) { 
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( p => this.ID = p['id'])
    this.ShowOneProduct()
  }

  Update(id: number) {
     this.router.navigate(['/register', this.ID])
  }

  Delete(id : number){
    this.apiservise.DeleteProduct(id).subscribe()
    this.apiservise.ApplyDelay("home")
  }

  ShowOneProduct(){
    this.apiservise.SearchProductById(this.ID).subscribe(
      res => this.product = res
    )
  }

}
