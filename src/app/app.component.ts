import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = 'firebase-angular-auth';
  isSignedIn = false

  response : any;

  constructor(public http:HttpClient, public firebaseService : FirebaseService) {
    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe(response => {
    //   console.log(response);
    // })
    //this.getAllParkingLotInfo();
   this.getPost();
  }

  async getPost() {
    this.response = await this.http.get('https://jsonplaceholder.typicode.com/posts')
          .pipe(take(1))
          .toPromise();
    console.log(this.response);
    console.log("Hello");
  }


  //   async getAllParkingLotInfo() {
  //   this.response =  await this.http.get('http://ec2-100-25-143-38.compute-1.amazonaws.com:8080/parkinglot/parkingInfo')
  //         .pipe(take(1))
  //         .toPromise();
  //   console.log(this.response);
  //   //console.log("Hello");
  // }

  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }
  

}
