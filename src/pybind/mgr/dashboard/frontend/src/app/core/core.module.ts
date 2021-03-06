import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlockUIModule } from 'ng-block-ui';
import { SidebarModule } from 'ng-sidebar';

import { SharedModule } from '../shared/shared.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { WorkbenchLayoutComponent } from './layouts/workbench-layout/workbench-layout.component';
import { NavigationModule } from './navigation/navigation.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BlockUIModule.forRoot(),
    CommonModule,
    NavigationModule,
    RouterModule,
    SharedModule,
    SidebarModule.forRoot()
  ],
  exports: [NavigationModule],
  declarations: [
    NotFoundComponent,
    ForbiddenComponent,
    WorkbenchLayoutComponent,
    BlankLayoutComponent
  ]
})
export class CoreModule {}
