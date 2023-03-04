import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  profileuser: UserList = { 
    about: '',
    address: '',
    age: 0,
    balance: '',
    company: '',
    email: '',
    eyeColor: '',
    favoriteFruit: '',
    friends: [{ id: 0, name: '' }],
    gender: '',
    greeting: '',
    guid: '',
    index: 0,
    isActive: false,
    latitude: 0,
    longitude: 0,
    name: '',
    phone: '',
    picture: '',
    registered: '',
    tags: [],
    _id: ''
};;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  } 

  getProfile(){
    this.http.get("https://express-t4.onrender.com/api/users/"+history.state.id).subscribe((response: any) => {
      this.profileuser = response;
      console.log(this.profileuser);
      console.log(this.profileuser?.friends)
    });
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
  friends: Friends[];
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