import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
      })
      
      // Change navbar color
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if(scroll>900 && scroll<2300){
            $("#nav").css("background", "#fff");
            $("a").css("color", "#000");
          } else {
            $("#nav").css("background", "#4033ff");
            $("a").css("color", "#fff");
            }
         })
      })
  }

}
