import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ExtractObjectPipe } from './Pipe/extract-object.pipe';
import { ReplaceUnderlinePipe } from './Pipe/replace-underline.pipe';

const PIPES = [ExtractObjectPipe, ReplaceUnderlinePipe];
const matModules = [MatIconModule, MatButtonModule, MatTableModule];
@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule, matModules],
  entryComponents: [],
  exports: [...PIPES],
  providers: [...PIPES],
})
export class SharedModule {}
