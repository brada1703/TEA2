import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isCollapsed:boolean = true;
  public collapsed(event:any):void {}
  public expanded(event:any):void {}

    //     constructor(private translate: TranslateService) {
    //     translate.addLangs(["en", "it"]);
    //     translate.setDefaultLang('en');

    //     let browserLang = translate.getBrowserLang();
    //     translate.use(browserLang.match(/en|it/) ? browserLang : 'en');
    // }
    //     changeLang(lang:string){
    //       this.translate.use(lang);
    // }

  constructor(private localize: LocalizeRouterService) {}

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }

}
