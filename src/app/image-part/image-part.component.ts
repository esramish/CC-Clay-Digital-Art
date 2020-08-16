import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { ElevationDirective } from '../elevation.directive';

@Component({
  selector: 'app-image-part',
  templateUrl: './image-part.component.html',
  styleUrls: ['./image-part.component.css']
})
export class ImagePartComponent implements OnInit {

  @Input() img_index: number;

  @ViewChild(ElevationDirective) elevDirective;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.elevDirective.onMouseLeave();
    this.dialog.open(ContentDialogComponent, {
      data: {index: this.img_index}
    });
  }

}
