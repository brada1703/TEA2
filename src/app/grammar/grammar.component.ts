import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {

  public isCollapsed:boolean = true;
  public collapsed(event:any):void {}
  public expanded(event:any):void {}

  public oneAtATime: boolean = true;
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: true
  };

  constructor() { }

  ngOnInit() {
  }

}
