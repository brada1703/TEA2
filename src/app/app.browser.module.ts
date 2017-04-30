import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { LocalizeRouterModule, LocalizeParser } from 'localize-router';

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

// import { GrammarModule } from './grammar/grammar.module';
import { GrammarComponent } from './grammar/grammar.component';
    import { GrammarHomeComponent } from './grammar/grammar-home/grammar-home.component';
    import { NounsComponent } from './grammar/nouns/nouns.component';
        import { PluralComponent } from './grammar/nouns/plural/plural.component';
        import { GenderComponent } from './grammar/nouns/gender/gender.component';
        import { CountableComponent } from './grammar/nouns/countable/countable.component';
        import { PronounsComponent } from './grammar/nouns/pronouns/pronouns.component';
        import { CompoundComponent } from './grammar/nouns/compound/compound.component';
        import { CapitalizationComponent } from './grammar/nouns/capitalization/capitalization.component';
        import { NationalitiesComponent } from './grammar/nouns/nationalities/nationalities.component';
        import { PossessivesComponent } from './grammar/nouns/possessives/possessives.component';
    import { AdjectivesComponent } from './grammar/adjectives/adjectives.component';
        import { ComparativesuperlativeComponent } from './grammar/adjectives/comparativesuperlative/comparativesuperlative.component';
        import { CompareattributesComponent } from './grammar/adjectives/compareattributes/compareattributes.component';
        import { EqualquantitiesComponent } from './grammar/adjectives/equalquantities/equalquantities.component';
        import { UnequalquantitiesComponent } from './grammar/adjectives/unequalquantities/unequalquantities.component';
        import { PlacementComponent } from './grammar/adjectives/placement/placement.component';
        import { OrderComponent } from './grammar/adjectives/order/order.component';
    import { AdverbsComponent } from './grammar/adverbs/adverbs.component';
        import { FromadjectivesComponent } from './grammar/adverbs/fromadjectives/fromadjectives.component';
        import { PlaceComponent } from './grammar/adverbs/place/place.component';
        import { TimeComponent } from './grammar/adverbs/time/time.component';
        import { MannerComponent } from './grammar/adverbs/manner/manner.component';
        import { DegreeComponent } from './grammar/adverbs/degree/degree.component';
        import { CertaintyComponent } from './grammar/adverbs/certainty/certainty.component';
        import { ViewpointandcommentingadverbsComponent } from './grammar/adverbs/viewpointandcommentingadverbs/viewpointandcommentingadverbs.component';
        import { RelativeComponent } from './grammar/adverbs/relative/relative.component';
        import { InterrogativeComponent } from './grammar/adverbs/interrogative/interrogative.component';
    import { DeterminersComponent } from './grammar/determiners/determiners.component';
        import { DefinitearticlesComponent } from './grammar/determiners/definitearticles/definitearticles.component';
        import { IndefinitearticlesComponent } from './grammar/determiners/indefinitearticles/indefinitearticles.component';
        import { DemonstrativesComponent } from './grammar/determiners/demonstratives/demonstratives.component';
        import { PronounsandpossessivedeterminersComponent } from './grammar/determiners/pronounsandpossessivedeterminers/pronounsandpossessivedeterminers.component';
        import { QuantifiersComponent } from './grammar/determiners/quantifiers/quantifiers.component';
        import { NumbersComponent } from './grammar/determiners/numbers/numbers.component';
        import { DistributivesComponent } from './grammar/determiners/distributives/distributives.component';
        import { DifferencewordsComponent } from './grammar/determiners/differencewords/differencewords.component';
        import { PredeterminersComponent } from './grammar/determiners/predeterminers/predeterminers.component';
    import { VerbsComponent } from './grammar/verbs/verbs.component';
        import { PresentComponent } from './grammar/verbs/present/present.component';
        import { SimplepresentComponent } from './grammar/verbs/simplepresent/simplepresent.component';
        import { PresentcontinuousComponent } from './grammar/verbs/presentcontinuous/presentcontinuous.component';
        import { PastComponent } from './grammar/verbs/past/past.component';
        import { SimplepastComponent } from './grammar/verbs/simplepast/simplepast.component';
        import { PastcontinuousComponent } from './grammar/verbs/pastcontinuous/pastcontinuous.component';
        import { PerfectComponent } from './grammar/verbs/perfect/perfect.component';
        import { PresentperfectComponent } from './grammar/verbs/presentperfect/presentperfect.component';
        import { PresentperfectcontinuousComponent } from './grammar/verbs/presentperfectcontinuous/presentperfectcontinuous.component';
        import { FutureperfectComponent } from './grammar/verbs/futureperfect/futureperfect.component';
        import { FutureperfectcontinuousComponent } from './grammar/verbs/futureperfectcontinuous/futureperfectcontinuous.component';
        import { FutureComponent } from './grammar/verbs/future/future.component';
        import { SimplefutureComponent } from './grammar/verbs/simplefuture/simplefuture.component';
        import { FuturecontinuousComponent } from './grammar/verbs/futurecontinuous/futurecontinuous.component';
        import { ConditionalComponent } from './grammar/verbs/conditional/conditional.component';
        import { ZeroconditionalComponent } from './grammar/verbs/zeroconditional/zeroconditional.component';
        import { Type1conditionalComponent } from './grammar/verbs/type1conditional/type1conditional.component';
        import { Type2conditionalComponent } from './grammar/verbs/type2conditional/type2conditional.component';
        import { Type3conditionalComponent } from './grammar/verbs/type3conditional/type3conditional.component';
        import { MixedconditionalComponent } from './grammar/verbs/mixedconditional/mixedconditional.component';
        import { FormsIngComponent } from './grammar/verbs/forms-ing/forms-ing.component';
        import { GerundComponent } from './grammar/verbs/gerund/gerund.component';
        import { PresentparticipleComponent } from './grammar/verbs/presentparticiple/presentparticiple.component';
        import { InfinitivesComponent } from './grammar/verbs/infinitives/infinitives.component';
        import { PassivevoiceComponent } from './grammar/verbs/passivevoice/passivevoice.component';
    import { SpeechComponent } from './grammar/speech/speech.component';
        import { DirectandindirectComponent } from './grammar/speech/directandindirect/directandindirect.component';
        import { VerbtensesComponent } from './grammar/speech/verbtenses/verbtenses.component';
        import { TimeandplacereferencesComponent } from './grammar/speech/timeandplacereferences/timeandplacereferences.component';
        import { ReportingquestionsComponent } from './grammar/speech/reportingquestions/reportingquestions.component';
        import { VerbsusedtoreportspeechComponent } from './grammar/speech/verbsusedtoreportspeech/verbsusedtoreportspeech.component';
        import { ReportordersrequestsandsuggestionsComponent } from './grammar/speech/reportordersrequestsandsuggestions/reportordersrequestsandsuggestions.component';
        import { ReporthopesrequestsandpromisesComponent } from './grammar/speech/reporthopesrequestsandpromises/reporthopesrequestsandpromises.component';
    import { PunctuationComponent } from './grammar/punctuation/punctuation.component';
        import { PeriodComponent } from './grammar/punctuation/period/period.component';
        import { CommaComponent } from './grammar/punctuation/comma/comma.component';
        import { ExclamationmarkComponent } from './grammar/punctuation/exclamationmark/exclamationmark.component';
        import { ColonComponent } from './grammar/punctuation/colon/colon.component';
        import { SemicolonComponent } from './grammar/punctuation/semicolon/semicolon.component';
        import { QuestionmarkComponent } from './grammar/punctuation/questionmark/questionmark.component';
        import { ApostropheComponent } from './grammar/punctuation/apostrophe/apostrophe.component';
        import { HyphenanddashComponent } from './grammar/punctuation/hyphenanddash/hyphenanddash.component';
        import { ParenthesesandbracketsComponent } from './grammar/punctuation/parenthesesandbrackets/parenthesesandbrackets.component';
    import { RelativeclausesComponent } from './grammar/relativeclauses/relativeclauses.component';
        import { DefiningclausesComponent } from './grammar/relativeclauses/definingclauses/definingclauses.component';
        import { NondefiningclausesComponent } from './grammar/relativeclauses/nondefiningclauses/nondefiningclauses.component';
    import { PrepositionsComponent } from './grammar/prepositions/prepositions.component';
        import { CommonprepositionsComponent } from './grammar/prepositions/commonprepositions/commonprepositions.component';
        import { PhrasalverbsComponent } from './grammar/prepositions/phrasalverbs/phrasalverbs.component';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'grammar', component: GrammarComponent
  ,
      children: [
          { path: '', component: GrammarHomeComponent },
          { path: 'adjectives', component: AdjectivesComponent },
            { path: 'comparativesuperlative', component: ComparativesuperlativeComponent },
            { path: 'compareattributes', component: CompareattributesComponent },
            { path: 'equalquantities', component: EqualquantitiesComponent },
            { path: 'unequalquantities', component: UnequalquantitiesComponent },
            { path: 'placement', component: PlacementComponent },
            { path: 'order', component: OrderComponent },
          { path: 'adverbs', component: AdverbsComponent },
            { path: 'fromadjectives', component: FromadjectivesComponent },
            { path: 'place', component: PlaceComponent },
            { path: 'time', component: TimeComponent },
            { path: 'degree', component: DegreeComponent },
            { path: 'certainty', component: CertaintyComponent },
            { path: 'viewpointandcommentingadverbs', component: ViewpointandcommentingadverbsComponent },
            { path: 'relative', component: RelativeComponent },
            { path: 'interrogative', component: InterrogativeComponent },
          { path: 'determiners', component: DeterminersComponent },
            { path: 'definitearticles', component: DefinitearticlesComponent },
            { path: 'indefinitearticles', component: IndefinitearticlesComponent },
            { path: 'demonstratives', component: DemonstrativesComponent },
            { path: 'pronounsandpossessivedeterminers', component: PronounsandpossessivedeterminersComponent },
            { path: 'quantifiers', component: QuantifiersComponent },
            { path: 'numbers', component: NumbersComponent },
            { path: 'distributives', component: DistributivesComponent },
            { path: 'differencewords', component: DifferencewordsComponent },
            { path: 'predeterminers', component: PredeterminersComponent },
          { path: 'nouns', component: NounsComponent},
            { path: 'gender', component: GenderComponent },
            { path: 'plural', component: PluralComponent },
            { path: 'countable', component: CountableComponent },
            { path: 'pronouns', component: PronounsComponent },
            { path: 'compound', component: CompoundComponent },
            { path: 'capitalization', component: CapitalizationComponent },
            { path: 'nationalities', component: NationalitiesComponent },
            { path: 'possessives', component: PossessivesComponent },
          { path: 'punctuation', component: PunctuationComponent },
            { path: 'period', component: PeriodComponent },
            { path: 'comma', component: CommaComponent },
            { path: 'exclamationmark', component: ExclamationmarkComponent },
            { path: 'colon', component: ColonComponent },
            { path: 'semicolon', component: SemicolonComponent },
            { path: 'questionmark', component: QuestionmarkComponent },
            { path: 'apostrophe', component: ApostropheComponent },
            { path: 'hyphenanddash', component: HyphenanddashComponent },
            { path: 'parenthesesandbrackets', component: ParenthesesandbracketsComponent },
          { path: 'relativeclauses', component: RelativeclausesComponent },
            { path: 'definingclauses', component: DefiningclausesComponent },
            { path: 'nondefiningclauses', component: NondefiningclausesComponent },
          { path: 'speech', component: SpeechComponent },
            { path: 'directandindirect', component: DirectandindirectComponent },
            { path: 'verbtenses', component: VerbtensesComponent },
            { path: 'timeandplacereferences', component: TimeandplacereferencesComponent },
            { path: 'reportingquestions', component: ReportingquestionsComponent },
            { path: 'verbsusedtoreportspeech', component: VerbsusedtoreportspeechComponent },
            { path: 'reportorderrequestsandsuggestions', component: ReportordersrequestsandsuggestionsComponent },
            { path: 'reporthopesrequestsandpromises', component: ReporthopesrequestsandpromisesComponent },
          { path: 'verbs', component: VerbsComponent },
            { path: 'present', component: PresentComponent },
            { path: 'simplepresent', component: SimplepresentComponent },
            { path: 'presentcontinuous', component: PresentcontinuousComponent },
            { path: 'past', component: PastComponent },
            { path: 'simplepast', component: SimplepastComponent },
            { path: 'pastcontinuous', component: PastcontinuousComponent },
            { path: 'perfect', component: PerfectComponent },
            { path: 'presentperfect', component: PresentperfectComponent },
            { path: 'presentperfectcontinuous', component: PresentperfectcontinuousComponent },
            { path: 'futureperfect', component: FutureperfectComponent },
            { path: 'futureperfectcontinuous', component: FutureperfectcontinuousComponent },
            { path: 'future', component: FutureComponent },
            { path: 'simplefuture', component: SimplefutureComponent },
            { path: 'futurecontinuous', component: FuturecontinuousComponent },
            { path: 'conditional', component: ConditionalComponent },
            { path: 'zeroconditional', component: ZeroconditionalComponent },
            { path: 'type1conditional', component: Type1conditionalComponent },
            { path: 'type2conditional', component: Type2conditionalComponent },
            { path: 'type3conditional', component: Type3conditionalComponent },
            { path: 'mixedconditional', component: MixedconditionalComponent },
            { path: 'ingforms', component: FormsIngComponent },
            { path: 'gerund', component: GerundComponent },
            { path: 'presentparticiple', component: PresentparticipleComponent },
            { path: 'infinitives', component: InfinitivesComponent },
            { path: 'passivevoice', component: PassivevoiceComponent },
          { path: 'prepositions', component: PrepositionsComponent },
            { path: 'commonprepositions', component: CommonprepositionsComponent },
            { path: 'phrasalverbs', component: PhrasalverbsComponent },
      ]
  },
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
    PronunciationComponent,
    PageNotFoundComponent,

    GrammarComponent,
    AdjectivesComponent,
    AdverbsComponent,
    DeterminersComponent,
    GrammarHomeComponent,
    NounsComponent,
    PunctuationComponent,
    RelativeclausesComponent,
    SpeechComponent,
    VerbsComponent,
    PluralComponent,
    GenderComponent,
    CountableComponent,
    PronounsComponent,
    CompoundComponent,
    CapitalizationComponent,
    NationalitiesComponent,
    PossessivesComponent,
    PlacementComponent,
    OrderComponent,
    ComparativesuperlativeComponent,
    CompareattributesComponent,
    EqualquantitiesComponent,
    UnequalquantitiesComponent,
    FromadjectivesComponent,
    PlaceComponent,
    TimeComponent,
    MannerComponent,
    DegreeComponent,
    CertaintyComponent,
    ViewpointandcommentingadverbsComponent,
    RelativeComponent,
    InterrogativeComponent,
    DefinitearticlesComponent,
    IndefinitearticlesComponent,
    DemonstrativesComponent,
    PronounsandpossessivedeterminersComponent,
    QuantifiersComponent,
    NumbersComponent,
    DistributivesComponent,
    DifferencewordsComponent,
    PredeterminersComponent,
    PresentComponent,
    SimplepresentComponent,
    PresentcontinuousComponent,
    PastComponent,
    SimplepastComponent,
    PastcontinuousComponent,
    PerfectComponent,
    PresentperfectComponent,
    PresentperfectcontinuousComponent,
    FutureperfectComponent,
    FutureperfectcontinuousComponent,
    FutureComponent,
    SimplefutureComponent,
    FuturecontinuousComponent,
    ConditionalComponent,
    ZeroconditionalComponent,
    Type1conditionalComponent,
    Type2conditionalComponent,
    Type3conditionalComponent,
    MixedconditionalComponent,
    FormsIngComponent,
    GerundComponent,
    PresentparticipleComponent,
    InfinitivesComponent,
    PassivevoiceComponent,
    DirectandindirectComponent,
    VerbtensesComponent,
    TimeandplacereferencesComponent,
    ReportingquestionsComponent,
    VerbsusedtoreportspeechComponent,
    ReportordersrequestsandsuggestionsComponent,
    ReporthopesrequestsandpromisesComponent,
    PeriodComponent,
    CommaComponent,
    ExclamationmarkComponent,
    ColonComponent,
    SemicolonComponent,
    QuestionmarkComponent,
    ApostropheComponent,
    HyphenanddashComponent,
    ParenthesesandbracketsComponent,
    DefiningclausesComponent,
    NondefiningclausesComponent,
    PrepositionsComponent,
    CommonprepositionsComponent,
    PhrasalverbsComponent,

    PronunciationDetailComponent,
    PronunciationListComponent,
    PronunciationItemComponent,
    Youtube
  ],
  imports: [
    // GrammarModule,
    BrowserModule,
    Ng2FilterPipeModule,
    // AlertModule.forRoot(),
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