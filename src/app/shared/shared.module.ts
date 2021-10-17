import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const PIPES = [];
const matModules = [MatIconModule, MatButtonModule, MatTableModule];
@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule, matModules],
  entryComponents: [],
  exports: [...PIPES],
  providers: [...PIPES],
})
export class SharedModule {}
