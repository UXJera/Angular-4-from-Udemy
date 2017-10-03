import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];


  ngOnInit() {
    // We want to do this on OnInit before the page is rendered
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [ Validators.required, this.forbiddenNames.bind(this)]),
        'email':    new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender':   new FormControl('male'),
      'hobbies':  new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    // The function will take in a FormControl argument and return a js object
    // The js object will take a key [s: string] => typescript's way of saying 'Hey, we want a key:value pair', the key can be interpreted as a string
    // {nameIsForbidden: true}
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true };
    }
    return null;
    // If validation is successful, either nothing or 'null' is passed
    // return {'nameIsForbidden': false }; would not work
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>( (resolve, reject) => {
        setTimeout(() => {
          if (control.value == 'test@test.com'){
            // If this is the case, validation failed
            resolve({'emailIsForbidden': true});
            // In promises, we do not return, we resolve()
          } else {
            resolve(null)
          }
        }, 1500);
        // This is simulating a 1.5s buffer, like us reaching out to a server
    });
    return promise;
  }
}
