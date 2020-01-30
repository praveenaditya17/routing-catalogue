import { Component, OnInit,Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-catalogue',
  templateUrl: './show-catalogue.component.html',
  styleUrls: ['./show-catalogue.component.css']
})
export class ShowCatalogueComponent implements OnInit {
  @Input() appChildMessage: any;
  imageURL:any=[];
  helperArray: Array<any>;
  i:number=0;
  constructor(private service:DataService) {
    
   }
   //str:any=localStorage.getItem('key');
  ngOnInit() {
    //this.str= localStorage.getItem("name");
      console.log("this is child component............");
      this.imageURL=this.service.getData();
      this.helperArray = new Array(this.imageURL.length/6);
      console.log(this.helperArray[0]);
   // console.log(localStorage.getItem('email'));
    //  console.log(this.appChildMessage.value.itemName);
  }

}
