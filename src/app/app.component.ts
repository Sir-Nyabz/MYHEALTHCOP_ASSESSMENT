
import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'MYHEALTHCOP';

  loader=true

  ngOnInit(){
    setTimeout(()=>{
      this.loader=false
          },3000);
          
    let arrow = document.querySelectorAll(".arrow");
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn= document.querySelector(".bi-list");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e:any)=>{
     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classList.toggle("showMenu");
      });
    }
    
      console.log(sidebarBtn);
       sidebarBtn!.addEventListener("click", ()=>{
       sidebar!.classList.toggle("close");
    });

    
  }

}

