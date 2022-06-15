import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFormat } from 'src/app/APIformat/userformat';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardregister',
  templateUrl: './cardregister.component.html',
  styleUrls: ['./cardregister.component.css']
})
export class CardregisterComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  userData!: UserDataService

  ngOnInit(): void {
  }

  registerForm = new FormGroup(
    {
      user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email])
    }
  )

  get email(){
    return this.registerForm.get('email');
  }

  get user(){
    return this.registerForm.get('user');
  }

  userList!: UserFormat[];
  retrEmail!: string;

  registerUser(userData: UserFormat){
    
    this.userData.getUserByName(userData.user).subscribe(data =>
      {
        this.userList = data
        //this.retrEmail = this.userList[0].email 
        
        if(Object.keys(data).length == 0) {
          this.userData.saveUser(data)
          this.router.navigateByUrl('login')
        }
        else {
          window.alert("Credentials already exists, please enter different username / email")
        }
      }
    )
  }
}
