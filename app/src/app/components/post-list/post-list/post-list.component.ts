import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  panelOpenState = false;

  posts = [
    { title: 'title 1', content: 'this is content of first title'},
    { title: 'title 2', content: 'this is content of first title2'},
    { title: 'title 3', content: 'this is content of first title3'},
    { title: 'title 4', content: 'this is content of first title4'},
    { title: 'title 5', content: 'this is content of first title5'}]


  constructor() { }

  ngOnInit(): void {
  }

}
