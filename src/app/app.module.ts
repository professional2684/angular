import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { CaseUpperPipe } from './pipes/case-upper.pipe';
import { RedElementDirective } from './red-element.directive';

import { UserDataService } from 'src/app/services/user-data.service';
import { CardregisterComponent } from './components/cardregister/cardregister.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLoginComponent,
    CardListComponent,
    CardDetailComponent,
    UpperCasePipe,
    CaseUpperPipe,
    RedElementDirective,
    CardregisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
