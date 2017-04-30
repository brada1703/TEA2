import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { LocalizeRouterModule, LocalizeParser } from 'localize-router';

import { Youtube } from '../pipes/youtube';

import { GrammarModule } from './grammar/grammar.module';
// import { PronunciationModule } from './pronunciation/pronunciation.module';

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

let fs = require('fs');

export class TranslateUniversalLoader implements TranslateLoader {
  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      observer.next(JSON.parse(fs.readFileSync(`/assets/locales/${lang}.json`, 'utf8')));
      observer.complete();
    });
  }
}

export class LocalizeUniversalLoader extends LocalizeParser {
  /**
   * Gets config from the server
   * @param routes
   */
  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      let data: any = JSON.parse(fs.readFileSync(`/assets/locales.json`, 'utf8'));
      this.locales = data.locales;
      this.prefix = data.prefix;
      this.init(routes).then(resolve);
    });
  }
}

export function localizeLoaderFactory(translate: TranslateService, location: Location) {
  return new LocalizeUniversalLoader(translate, location);
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'grammar', component: GrammarComponent },
  { path: 'pronunciation', component: PronunciationComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GrammarComponent,
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
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: TranslateUniversalLoader
        }
    }),
    RouterModule.forRoot(appRoutes),
    LocalizeRouterModule.forRoot(appRoutes, {
            provide: LocalizeParser,
            useFactory: localizeLoaderFactory,
            deps: [TranslateService]
    }),
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