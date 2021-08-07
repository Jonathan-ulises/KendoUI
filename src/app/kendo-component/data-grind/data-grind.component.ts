import { Component } from '@angular/core';
//Kendo Grid------------------------
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query'
//----------------------------------
import { ProductService } from '../../data/product.service'
import { categories } from '../../data/data.categories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-grind',
  templateUrl: './data-grind.component.html',
  styles: [
    
  ],
  providers: [
    ProductService
  ]
})
export class DataGrindComponent  {
  public dropDownItems = categories;
  public defaultItem = {
    text: 'Filter by category',
    value: null
  };

  //GRID
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 15;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;

  constructor(
    private service: ProductService
  ){
    this.loadGridItems();
  }

  public pageChange( event: PageChangeEvent) : void {
    this.skip = event.skip;
    console.log(event);
    this.loadGridItems();
  }


  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  public handleSortChange( descriptor: SortDescriptor[]) : void {
    this.sortDescriptor = descriptor;
    console.log(descriptor);
    this.loadGridItems();
  }
}
