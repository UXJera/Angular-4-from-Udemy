import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // New properties created for app.component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output() is the angular function we use to output the data
  // <> is used to define the type of event data we are going to emit
  // {} is what event we define, this one takes the object from /app/app.component.ts of the onServerAdded() method
  // () at the end is to call the event

  // We only need to use the following variables if we are using [(ngModel)] for 2-way data binding
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // a new event will be emitted
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }



}
