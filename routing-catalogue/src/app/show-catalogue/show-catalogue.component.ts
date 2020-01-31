import { Component, OnInit,Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-catalogue',
  templateUrl: './show-catalogue.component.html',
  styleUrls: ['./show-catalogue.component.css']
})
export class ShowCatalogueComponent implements OnInit {
  // @Input() appChildMessage: any;
  imageURL:any=[];// product records array
  helperArray: Array<any>;  //helper array stored total number of records
  i:number=0;

  // constructor of the class
  constructor(private service:DataService) {
   }
  
  ngOnInit() {
      // here getting the record of product  from the service 
      this.imageURL=this.service.getData();
      this.helperArray = new Array(this.imageURL.length/6);
  }

}
