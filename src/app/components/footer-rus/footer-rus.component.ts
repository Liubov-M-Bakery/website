import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-rus',
  templateUrl: './footer-rus.component.html',
  styleUrls: ['./footer-rus.component.css']
})
export class FooterRusComponent implements OnInit {

  date: number;

  constructor() { }

  ngOnInit() {
    this.date = new Date().getFullYear();
  }

}
