import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'This is just a test!'}];

  // This will fire once a button has been clicked
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // This will fire once a button has been clicked
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  // Example for ngOnChanges
  onChangeFirst() {
    this.serverElements[0].name = "Changed";
  }

  // Example for ngOnDestroy
  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
