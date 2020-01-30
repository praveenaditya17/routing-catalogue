import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  records:any=[];

  constructor() { }
  getData(){
    
    console.log(this.records.length);
    return this.records;
  }
  setData(a:any){
    this.records[this.records.length]=a;
  }

}
