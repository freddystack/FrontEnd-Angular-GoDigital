import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {ProductUI} from '../../Interfaces/product.interface'
import {ApiServiceService} from '../../services/api-service.service'
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  product = {} = new ProductUI();
  private ID : number
  IsUpdated: boolean = false

  constructor(private apiService: ApiServiceService,
              private activatedRputer : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRputer.params.subscribe(p => this.ID = p['id'] )
    if( !isNaN(this.ID) ){
      this.IsUpdated = true
       this.apiService.SearchProductById(this.ID).subscribe(
        res => this.product = res
      ) 
    }
    else{
      this.IsUpdated = false
    }
  }

  Save( form : NgForm){
    if(form.invalid){
      Object.values( form.controls ).forEach(e => {
        e.markAllAsTouched()
      })
      alert("Por favor ingrese los datos necesarios!")
      return
    }
    if( !isNaN(this.ID) ){
      this.apiService.UpdateProduct(form.value, this.ID).subscribe()
    }
    else{
      this.apiService.InsertNewProduct(form.value).subscribe()
    }
     this.apiService.ApplyDelay("home")
  }
}
