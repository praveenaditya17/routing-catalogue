import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  records:any=[]; // this array store the product informatons 

  constructor() { }

  // this is getter method
  getData(){
    return this.records;
  }
  // this is setter method
  setData(a:any){
    this.records[this.records.length]=a;
  }
}
