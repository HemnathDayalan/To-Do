import { Component, OnInit , OnChanges} from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { eventNames } from 'process';
import { filter, skip } from 'rxjs/operators';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  
  baseUrl = "http://localhost:4200";
  hideElement: boolean = true;
  taskList = [];
  newTaskName = '';
  newTaskDesc ='';

  showelement: boolean = true;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routerLogics();
  }

  routerLogics(){
    this.router.events.pipe(
      filter((event: NavigationEvent) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEvent) => {
      if(this.router.url.includes(this.baseUrl+'/task')){
        console.log(this.hideElement+" displaying the element");
        this.hideElement = true
      }
      else{
        this.hideElement = false
      }
    });
  }

  bindingName($event : InputEvent){
    this.newTaskName = ($event.target as HTMLInputElement).value;
    
  }

  toggleElement(){
    this.showelement = ! this.showelement
  }
}
