import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentHtmlService {

  contentHtmlsObj: any; // The central data structure for this service

  constructor() {
    this.contentHtmlsObj = {
      // keys are filenames (without path and extension) of images to be clicked on
      // values are strings of HTML that are rendered in the corresponding dialog
      0: this.getPngHtml(0),
      1: this.getPngHtml(1)
    }
  }

  // Functions for other classes to use

  getClickableImgNames(): string[] {
    return Object.keys(this.contentHtmlsObj);
  }

  getContentHtml(imgName: string): string {
    return this.contentHtmlsObj[imgName];
  }


  // Helper functions to get HTML for different filetypes located in subdirectories in Submitted_Content
  
  private getPngHtml(index): string {
    return `<img src='assets/Submitted_Content/${index}/${index}.png' alt='PNG submission #${index}'>`
  }

}
