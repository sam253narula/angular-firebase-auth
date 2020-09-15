import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyCeHlb9vq0dALZa4sZdMDXdyfmhedjXFBo",
  authDomain: "booming-octane-275520.firebaseapp.com",
  databaseURL: "https://booming-octane-275520.firebaseio.com",
  projectId: "booming-octane-275520",
  storageBucket: "booming-octane-275520.appspot.com",
  messagingSenderId: "445686267730",
  appId: "1:445686267730:web:7da97685503a814fa6048b"
};
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
     // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage 
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  providers: [FirebaseService],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
