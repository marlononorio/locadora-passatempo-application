import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocadorapassatempoapiSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [LocadorapassatempoapiSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class LocadorapassatempoapiHomeModule {}
