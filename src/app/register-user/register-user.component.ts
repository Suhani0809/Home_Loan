import { Component, OnInit } from '@angular/core';
import { USER } from '../Models/user';
import { RegisterUserService } from '../register-user.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  id:number=2;
  users:USER[]=[];
  user:USER={
    cid:0,
    firstName:"",
    middleName:"",
    lastName:"",
    gender:"",
    address:"",
    phoneNumber:"",
    dob:new Date(),
    age:0,
    email:"",
    nationality:"",
    aadharNo:0,
    panNo:"",
    password:"",
    confirmPassword:""
  };

  bform:number=0;

  constructor(private obj:RegisterUserService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  testformlink(data:any)
  {
    console.log(data);
    console.log(this.user.cid);
    this.router.navigate(['/AddDocuments/'+this.user.cid])
  }

  post_User():void
  {
    this.obj.CreateUser(this.user).subscribe();
  }
  
}
