import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
// db imports
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-update-health-details',
  templateUrl: 'update-health-details.html',
})
export class UpdateHealthDetailsPage {


  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public db: AngularFireDatabase
	) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateHealthDetailsPage');
  }

  changeDetails(age, weight, height, activityLevel){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){


    if(snapshot.exists()){
      snapshot.forEach((childSnapshot => {
        firebase.database().ref('/' + userId + '/healthDetails/' + childSnapshot.key).update({age: age, height: height, weight: weight, activityLevel: activityLevel});
      }));
    }else{
      firebase.database().ref('/' + userId + '/healthDetails/').push({age: age, height: height, weight: weight, activityLevel: activityLevel});

    }

    firebase.database().ref('/' + userId + '/historicHealthDetails/').push({age: age, height: height, weight: weight, date: Date()});

    });

    //return to previous page 
    this.navCtrl.pop();
  }
  
}
