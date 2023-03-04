import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-listing',
  templateUrl: './profile-listing.component.html',
  styleUrls: ['./profile-listing.component.css']
})

export class ProfileListingComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { 
    }

  userlist: UserList[] = [];
  dataSource: UserList[] = [];
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://express-t4.onrender.com/api/users").subscribe((response: any) => {
      this.userlist = response;
      this.dataSource = this.userlist;
    });
  }

  routeLink(data: string){
    this.router.navigate(['/profileview'], {state: {id: data}});
  }

  filterUser(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = this.userlist.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
}

export interface UserList {
  about: string;
  address: string;
  age: number;
  balance: string;
  company: string;
  email: string;
  eyeColor: string;
  favoriteFruit: string;
  friends: Friends;
  gender: string;
  greeting: string;
  guid: string;
  index: number;
  isActive: boolean;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  picture: string;
  registered: string;
  tags: string[];
  _id: string;
}

export interface Friends {
  id: number;
  name: string;
}


