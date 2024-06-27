import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
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
