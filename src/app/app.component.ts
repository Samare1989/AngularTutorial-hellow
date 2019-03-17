import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethiopian Airlines';

  subtitle: string = "From .Net BC 5";
   
   
  inputtxt: string = "default input text";
    
  
  changetitle( txt: string): void{

    this.title = txt;
  }
}
