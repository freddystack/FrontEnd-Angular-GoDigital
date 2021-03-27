import { Component, OnInit } from '@angular/core';
import { ProductUI } from 'src/app/Interfaces/product.interface';
import {ApiServiceService} from '../../services/api-service.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.css']
})
export class RecentProductsComponent implements OnInit {

  ListProducts: {} = new ProductUI()

  constructor(private apiservice : ApiServiceService, 
              private route: Router) { }

  ngOnInit(): void {
     this.ShowProducts()
  }
 
  ShowProducts(){
    this.apiservice.GetProducts().subscribe(
      res => {
        this.ListProducts = res
      },
      error => console.log(error)
    )
  }

  Manage(id : number){
    this.route.navigate(['/manageproduct', id])
  }

}
