import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriesService } from '../../data/services/categories.service';

@Component({
  selector: 'app-data-tree',
  templateUrl: './data-tree.component.html',
  styles: [
    
  ]
})
export class DataTreeComponent {

  //Basic
  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture'}
      ]
    },
    {
      text: "Decor",
      items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];

  //LocalHeterogeneousData
  public treeNodes: any[] = [
    {
      categoryName: "Storage",
      subCategories: [
        { subCategoryName: "Wall Shelving" },
        { subCategoryName: "Floor Shelving" },
        { subCategoryName: "Kids Storage" },
      ],
    },
    {
      categoryName: "Lights",
      subCategories: [
        { subCategoryName: "Ceiling" },
        { subCategoryName: "Table" },
        { subCategoryName: "Floor" },
      ],
    },
  ];

  public buscarHijos( dataitem: any ) : Observable<any[]> {
    //retorna los items hijos del padre.
    console.log(dataitem.items);
    return of (dataitem.items);
  }

  public tieneHijos( dataitem: any ) : boolean {
    //Regresa el resultado booleano de la comparacion
    //si tiene la seccion items, y si el tamaño de items es mayor a 0
    return dataitem.items && dataitem.items.length > 0;
  }

  //REMOTE DATA
  // public categories: Observable<any[]>;

  // constructor( private categoriesService: CategoriesService){}

  // ngOnInit(): void {
  //   this.categories = this.categoriesService.fetchCategories();
  // }

  // public hasChildren( item: any ) : boolean {
  //   return "CategoryName" in item;
  // }

  // public fetchChildren = (item: any) =>
  //   this.categoriesService.fetchProducts(item.CategoryID);


  //Flat Data
  public treeNodesFlat: any[] = [
    {
      id: 1,
      desc: "Root Node 1",
    },
    {
      id: 2,
      desc: "Root Node 2",
    },
    {
      id: 3,
      parentId: 2,
      desc: "Child node of Root Node 2",
    },
  ];
}
