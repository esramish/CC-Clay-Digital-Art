import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { ElevationDirective } from '../elevation.directive';
import { ContentHtmlService } from '../content-html.service';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent implements OnInit {

  contentHtml: string;
  
  @Input() imgName: string;

  @ViewChild(ElevationDirective) elevDirective;

  constructor(public dialog: MatDialog, public contentHtmlService: ContentHtmlService) { }

  ngOnInit(): void {
    this.contentHtml = this.contentHtmlService.getContentHtml(this.imgName);
  }

  openDialog(): void {
    this.elevDirective.onMouseLeave();
    this.dialog.open(ContentDialogComponent, {
      data: {contentHtml: this.contentHtml}
    });
  }

}
