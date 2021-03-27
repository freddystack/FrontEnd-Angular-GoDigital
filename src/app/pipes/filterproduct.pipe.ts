import { Pipe, PipeTransform } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Pipe({
  name: 'filterproduct'
})
export class FilterproductPipe implements PipeTransform {

  constructor(private apiService: ApiServiceService){

  }

  transform(value: any, args: any): any {
     if( args === '' || args.lenght < 3){
         return value
     }

     
     console.log(this.apiService.filterType);
    console.log(args);
     const resultProduct = []
     for( let i of value){
  
      if(this.apiService.filterType == "nombre" || this.apiService.filterType == "default"){
          if(i.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
                      resultProduct.push(i)
          }
      }else{
        if(i.categpria.toLowerCase().indexOf(args.toLowerCase()) > -1){
          resultProduct.push(i)
        }
      }
         
     }
     return resultProduct
  }

}
