import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent implements OnInit {

  public oneAtATime: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
