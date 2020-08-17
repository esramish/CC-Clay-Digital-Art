import { Component } from '@angular/core';
import { ContentHtmlService } from './content-html.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imgNames: string[];
  
  constructor (public contentHtmlService: ContentHtmlService) {
    this.imgNames = contentHtmlService.getClickableImgNames();
  }
}
