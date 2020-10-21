import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  companies = [
    'https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png',
    'https://lh3.googleusercontent.com/proxy/20fIlgP-5r2gmYjqB30SUigs8f76NPTJI_SD-p54526B32LTp71gzIbx6TcJm0M4k_rWdkmZy5iV94kCBuhtM4r0Q-y5queoh0yJlpSPoiXvz_xKAUg',
    'https://images.template.net/wp-content/uploads/2017/04/Logo-Design1.jpg',
    'https://corelpro.com/wp-content/uploads/2019/10/Logo-Design-Template.jpg',
    'https://arenareviews.com/wp-content/uploads/2018/01/3d-company-logo-design.jpg',
    'https://corelpro.com/wp-content/uploads/2019/03/Logo-Design-Template.jpg',
    'https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png',
    'https://lh3.googleusercontent.com/proxy/20fIlgP-5r2gmYjqB30SUigs8f76NPTJI_SD-p54526B32LTp71gzIbx6TcJm0M4k_rWdkmZy5iV94kCBuhtM4r0Q-y5queoh0yJlpSPoiXvz_xKAUg',
    'https://images.template.net/wp-content/uploads/2017/04/Logo-Design1.jpg',
    'https://corelpro.com/wp-content/uploads/2019/10/Logo-Design-Template.jpg',
    'https://arenareviews.com/wp-content/uploads/2018/01/3d-company-logo-design.jpg',
    'https://corelpro.com/wp-content/uploads/2019/03/Logo-Design-Template.jpg',
  ]

  ngOnInit(): void {}

}
