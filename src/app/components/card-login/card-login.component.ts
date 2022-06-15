import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { UserFormat } from 'src/app/APIformat/userformat';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  username :string = '';
  users: any;

  // user data service to pull data from API
  constructor(private router: Router, private userData: UserDataService){}

  ngOnInit(): void {
  }

  loginForm = new FormGroup(
    {
      user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email])
    }
  )

  get email(){
    return this.loginForm.get('email');
  }

  get user(){
    return this.loginForm.get('user');
  }  

  //userList!: UserFormat; //using own API
  userList!: UserFormat[]; //using Mock API
  
  gotoList(item: any){
   
    /** // hard coded dictionary for validation
    var userBase:{[key: string] : string} = {
      testuser1: 'test1@test.com',
      testuser2: 'test2@test.com'
    };
     */
   
    this.userData.getUserByName(item.user).subscribe(data =>
      {
        this.userList = data
        //console.log(Object.keys(data).length, this.userList.email ,  item.email)
        //if(Object.keys(data).length == 1 && this.userList.email == item.useremail) {
        if(Object.keys(data).length == 1 && this.userList[0].email == item.email) {
          this.router.navigateByUrl('list')
        }
        else {
          window.alert("Please enter valid username / email")
        }
      }
    )
    
    //console.warn('validate',this.retrEmail,this.userList) // doesnt work , why?
  }

}
