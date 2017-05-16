import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-message',
  templateUrl: './hidden-message.component.html',
  styleUrls: ['./hidden-message.component.scss']
})
export class HiddenMessageComponent implements OnInit {

  hiddenMessage = false;
  clickArray = [];

  constructor() { }
  
  onDisplayHiddenMessage() {
    this.hiddenMessage = !this.hiddenMessage;
    this.clickArray.push(new Date());
  }

  ngOnInit() {
  }

}
