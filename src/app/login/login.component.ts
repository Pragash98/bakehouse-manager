import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html",
    imports:[CommonModule, FormsModule]
})

export class LoginComponent{
    email:any="";
    password:any="";

    login(){
        console.log("thismame",this.email);
    }
}