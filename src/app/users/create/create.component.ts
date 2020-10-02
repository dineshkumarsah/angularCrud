import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup

  constructor(private userService: UsersService,private fb: FormBuilder,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [],
      username: [],
      email: []
    });

  }
  createUser(){
    this.userService.createUser(this.userForm.value).subscribe({
      next: (res)=>{
        alert("user created successfully!")
       console.log(res);
       this.router.navigateByUrl('user/index');
      
       
      }
    });

  }

}
