import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response : any;
  @Output() isLogout = new EventEmitter<void>()
  constructor(public http:HttpClient, public firebaseService: FirebaseService) {
    this.getPost();
    
   }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  async getPost() {
    this.response = await this.http.get('https://jsonplaceholder.typicode.com/posts')
          .pipe(take(1))
          .toPromise();
    console.log(this.response);
    console.log("Hello");
  }


}
