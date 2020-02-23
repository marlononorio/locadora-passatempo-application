import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LocadorapassatempoapiSharedModule } from 'app/shared/shared.module';
import { LocadorapassatempoapiCoreModule } from 'app/core/core.module';
import { LocadorapassatempoapiAppRoutingModule } from './app-routing.module';
import { LocadorapassatempoapiHomeModule } from './home/home.module';
import { LocadorapassatempoapiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LocadorapassatempoapiSharedModule,
    LocadorapassatempoapiCoreModule,
    LocadorapassatempoapiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LocadorapassatempoapiEntityModule,
    LocadorapassatempoapiAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class LocadorapassatempoapiAppModule {}
