import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id: number;
  userData: any;

  constructor(private userService: UsersService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe({
     next: (res)=>{
       this.id = res['params'].userId       
     }
    })
    this.userService.getUserById(this.id).subscribe({
      next: (userData)=>{
        this.userData = userData
       console.log(userData);
       
      }
    })
  }

}
