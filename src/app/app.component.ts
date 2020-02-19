import { Component,HostListener, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'landingNavScrollingActive';


  ngOnInit(){

  }


  menuClick(e){
    console.log('reach')
    console.log(e);
  }
}
