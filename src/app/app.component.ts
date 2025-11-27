import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductAPI';

  products:any[]=[]
  st:string='';
  c=0;
  constructor(private ds:DataService)
  {
    this.ds.getAllProduct().subscribe((data:any) => this.products=data.products)
  }

  search()
  {
    this.ds.getSearchProducts(this.st).subscribe((data:any) =>{this.products=data.products})
  }
  add()
  {
    this.c++;
  }
  filters(e:any)
  {
    this.ds
        .getCategoryProducts(e.target.textContent)
        .subscribe((data:any)=>(this.products= data.products))
  }
  
}
