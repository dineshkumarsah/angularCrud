import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UsersService} from '../services/users.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userData

  constructor(private userService: UsersService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this. getAlluser()
   
  }
  getAlluser(){
    this.userService.getUserData().subscribe({
      next:(data)=>{
        this.userData = data
       console.log(data);
       
      }
    })
  }

  deleteUser(id){
    alert(`Are you sute to delete ${id}`)
    this.userService.deleteUser(id).subscribe({
      next: (res)=>{
        alert(`${id} Deleted successfully`)
        console.log("deleted");
        this. getAlluser()
        
      }
    })
  }

  // editUserDetails(id){
  //   this.route.navigate(['user',id,'edit']);
  // }

}
