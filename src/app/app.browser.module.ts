import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { LocalizeRouterModule } from 'localize-router';

import { Youtube } from '../pipes/youtube';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PronunciationComponent } from './pronunciation/pronunciation.component';
    import { PronunciationDetailComponent } from './pronunciation/pronunciation-detail/pronunciation-detail.component';
    import { PronunciationListComponent } from './pronunciation/pronunciation-list/pronunciation-list.component';
    import { PronunciationItemComponent } from './pronunciation/pronunciation-list/pronunciation-item/pronunciation-item.component';

import { GrammarComponent } from './grammar/grammar.component';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'grammar', component: GrammarComponent,
    loadChildren: './grammar/grammar.module#GrammarModule' },
  { path: 'pronunciation', component: PronunciationComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    GrammarComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PronunciationComponent,
    PageNotFoundComponent,
    PronunciationDetailComponent,
    PronunciationListComponent,
    PronunciationItemComponent,
    Youtube
  ],
  imports: [
    BrowserModule,
    Ng2FilterPipeModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [ Http ]
        }
    }),
    LocalizeRouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  exports: [
      RouterModule,
      TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }