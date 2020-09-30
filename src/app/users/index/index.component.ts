import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userData

  constructor(private userService: UsersService) { }

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
    this.userService.deleteUser(id).subscribe({
      next: (res)=>{
        console.log("deleted");
        this. getAlluser()
        
      }
    })
  }

}
