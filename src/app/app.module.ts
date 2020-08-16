import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagePartComponent } from './image-part/image-part.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ElevationDirective } from './elevation.directive';

@NgModule({
  entryComponents: [
    ContentDialogComponent
  ],
  declarations: [
    AppComponent,
    ImagePartComponent,
    ContentDialogComponent,
    ElevationDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
