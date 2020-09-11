import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
 favLinks = ["https://www.youtube.com/", "https://github.com/"]
 
  constructor() { }

  ngOnInit() {
  }

}
