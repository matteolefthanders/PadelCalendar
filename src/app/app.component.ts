import { Component } from '@angular/core';
import firebase from 'firebase';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZeJU1IgN4wOuNcouyclxVCplcSdbEu2o",
  authDomain: "padelbot-74d49.firebaseapp.com",
  databaseURL: "https://padelbot-74d49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "padelbot-74d49",
  storageBucket: "padelbot-74d49.appspot.com",
  messagingSenderId: "373215781395",
  appId: "1:373215781395:web:247b222ac9585bce9595e6",
  measurementId: "G-SX1D76JBSN"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireapp';
  
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
