import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,ReactiveFormsModule, Validators, NgForm} from '@angular/forms';
import{DataService} from '../data.service'
import {  Router  } from "@angular/router";
@Component({
  selector: 'app-add-catalogue',
  templateUrl: './add-catalogue.component.html',
  styleUrls: ['./add-catalogue.component.css']
})

//this is add catalogue class

export class AddCatalogueComponent implements OnInit {

  // this is variable name for  getting the information from Form
  imageName:any;
  productInformations :any;
  addProduct:FormGroup;
  itemName:string="";
  brandName:string="";
  price:string="";
  color:string="";
  detail:string="";
  image:string="";
  submitted:boolean=false;

  //constructor of this calss
  constructor( private frmbuilder:FormBuilder,private router:Router,private service:DataService) {
   }

   // this method used for status of the form control, used for formValidations
   get frm() { return this.addProduct.controls; }

  //this function used for insert record in productInformations object 
  sendData(addProduct:NgForm){
      if(this.addProduct.valid){
        this.addProduct.value.image=this.imageName;
        this.productInformations=this.addProduct.value;   
      }
        this.submitted=true;
     
        //these code used for set the product information  in Service
        this.service.setData(this.productInformations.itemName);
        this.service.setData(this.imageName);
        this.service.setData(this.productInformations.brandName); 
        this.service.setData(this.productInformations.color);
        this.service.setData(this.productInformations.detail);
        this.service.setData(this.productInformations.price);
        
        //this line used to navigate the showCatalogue component
        this.router.navigateByUrl("/showcatalogue");
    }

  public imagePath;
  imgURL: any;
  public message: string;

 // this method used for show the image on from
  readURL(files)
  {
    if (files.length === 0)
        return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null)
    {
        this.message = "Only images are supported.";
        return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) =>
    { 
        this.imgURL = reader.result; 
    }
   this.imageName="/assets/"+files[0].name;
  }

  // this is ngOnInit method 
  ngOnInit() {
    
    // these code are used to geeting information from Form and also used for Form Validations
    this.addProduct=this.frmbuilder.group({
      itemName:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],  
      brandName:['',[Validators.required,Validators.maxLength(19)]], 
      price:['',Validators.required],
      color:['',Validators.required],
      detail:['',Validators.required],
      image:['',Validators.required]
    })
    
  }// end of ngOnInit method

}//end of class
