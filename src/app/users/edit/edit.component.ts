import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit ,OnDestroy{

  useEditForm: FormGroup
  id: any
  userData: any;
  idsubscription: Subscription;
  editSubscription: Subscription

  constructor(private fb: FormBuilder, private userService: UsersService, private route: ActivatedRoute,
   private router:Router) { }

  ngOnInit(): void {
    debugger;
   this.idsubscription= this.route.paramMap.subscribe({
      next: (res)=>{
        this.id = res['params'].Id      
      }
  })
 
  this.getUserById();
  
}
  createForm(){
    debugger
    this.useEditForm=this.fb.group({
      'id':[this.userData.id],
      'name':[this.userData.name],
      'username':[this.userData.username],
      'email':[this.userData.email]
    })
  }

  getUserById(){
    this.userService.getUserById(this.id).subscribe({
      next: (userData)=>{
        this.userData = userData
       console.log("edit user",userData);
       this. createForm()
       
      }
    })
  }

  updateUserData(){
   this.editSubscription = this.userService.editUser(this.useEditForm.value).subscribe({
     next: (res)=>{
       alert("UpDated sucessfully");
       this.router.navigateByUrl('user/index'); 
     },
     error: (error: HttpErrorResponse)=>{
       console.log(error);
       
     }
   })
  }

  
ngOnDestroy(){
  this.idsubscription.unsubscribe()
}
  
}
