import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { GrammarHomeComponent } from './grammar-home/grammar-home.component';
import { NounsComponent } from './nouns/nouns.component';
    import { PluralComponent } from './nouns/plural/plural.component';
    import { GenderComponent } from './nouns/gender/gender.component';
    import { CountableComponent } from './nouns/countable/countable.component';
    import { PronounsComponent } from './nouns/pronouns/pronouns.component';
    import { CompoundComponent } from './nouns/compound/compound.component';
    import { CapitalizationComponent } from './nouns/capitalization/capitalization.component';
    import { NationalitiesComponent } from './nouns/nationalities/nationalities.component';
    import { PossessivesComponent } from './nouns/possessives/possessives.component';
import { AdjectivesComponent } from './adjectives/adjectives.component';
    import { ComparativesuperlativeComponent } from './adjectives/comparativesuperlative/comparativesuperlative.component';
    import { CompareattributesComponent } from './adjectives/compareattributes/compareattributes.component';
    import { EqualquantitiesComponent } from './adjectives/equalquantities/equalquantities.component';
    import { UnequalquantitiesComponent } from './adjectives/unequalquantities/unequalquantities.component';
    import { PlacementComponent } from './adjectives/placement/placement.component';
    import { OrderComponent } from './adjectives/order/order.component';
import { AdverbsComponent } from './adverbs/adverbs.component';
    import { FromadjectivesComponent } from './adverbs/fromadjectives/fromadjectives.component';
    import { PlaceComponent } from './adverbs/place/place.component';
    import { TimeComponent } from './adverbs/time/time.component';
    import { MannerComponent } from './adverbs/manner/manner.component';
    import { DegreeComponent } from './adverbs/degree/degree.component';
    import { CertaintyComponent } from './adverbs/certainty/certainty.component';
    import { ViewpointandcommentingadverbsComponent } from './adverbs/viewpointandcommentingadverbs/viewpointandcommentingadverbs.component';
    import { RelativeComponent } from './adverbs/relative/relative.component';
    import { InterrogativeComponent } from './adverbs/interrogative/interrogative.component';
import { DeterminersComponent } from './determiners/determiners.component';
    import { DefinitearticlesComponent } from './determiners/definitearticles/definitearticles.component';
    import { IndefinitearticlesComponent } from './determiners/indefinitearticles/indefinitearticles.component';
    import { DemonstrativesComponent } from './determiners/demonstratives/demonstratives.component';
    import { PronounsandpossessivedeterminersComponent } from './determiners/pronounsandpossessivedeterminers/pronounsandpossessivedeterminers.component';
    import { QuantifiersComponent } from './determiners/quantifiers/quantifiers.component';
    import { NumbersComponent } from './determiners/numbers/numbers.component';
    import { DistributivesComponent } from './determiners/distributives/distributives.component';
    import { DifferencewordsComponent } from './determiners/differencewords/differencewords.component';
    import { PredeterminersComponent } from './determiners/predeterminers/predeterminers.component';
import { VerbsComponent } from './verbs/verbs.component';
    import { PresentComponent } from './verbs/present/present.component';
    import { SimplepresentComponent } from './verbs/simplepresent/simplepresent.component';
    import { PresentcontinuousComponent } from './verbs/presentcontinuous/presentcontinuous.component';
    import { PastComponent } from './verbs/past/past.component';
    import { SimplepastComponent } from './verbs/simplepast/simplepast.component';
    import { PastcontinuousComponent } from './verbs/pastcontinuous/pastcontinuous.component';
    import { PerfectComponent } from './verbs/perfect/perfect.component';
    import { PresentperfectComponent } from './verbs/presentperfect/presentperfect.component';
    import { PresentperfectcontinuousComponent } from './verbs/presentperfectcontinuous/presentperfectcontinuous.component';
    import { FutureperfectComponent } from './verbs/futureperfect/futureperfect.component';
    import { FutureperfectcontinuousComponent } from './verbs/futureperfectcontinuous/futureperfectcontinuous.component';
    import { FutureComponent } from './verbs/future/future.component';
    import { SimplefutureComponent } from './verbs/simplefuture/simplefuture.component';
    import { FuturecontinuousComponent } from './verbs/futurecontinuous/futurecontinuous.component';
    import { ConditionalComponent } from './verbs/conditional/conditional.component';
    import { ZeroconditionalComponent } from './verbs/zeroconditional/zeroconditional.component';
    import { Type1conditionalComponent } from './verbs/type1conditional/type1conditional.component';
    import { Type2conditionalComponent } from './verbs/type2conditional/type2conditional.component';
    import { Type3conditionalComponent } from './verbs/type3conditional/type3conditional.component';
    import { MixedconditionalComponent } from './verbs/mixedconditional/mixedconditional.component';
    import { FormsIngComponent } from './verbs/forms-ing/forms-ing.component';
    import { GerundComponent } from './verbs/gerund/gerund.component';
    import { PresentparticipleComponent } from './verbs/presentparticiple/presentparticiple.component';
    import { InfinitivesComponent } from './verbs/infinitives/infinitives.component';
    import { PassivevoiceComponent } from './verbs/passivevoice/passivevoice.component';
import { SpeechComponent } from './speech/speech.component';
    import { DirectandindirectComponent } from './speech/directandindirect/directandindirect.component';
    import { VerbtensesComponent } from './speech/verbtenses/verbtenses.component';
    import { TimeandplacereferencesComponent } from './speech/timeandplacereferences/timeandplacereferences.component';
    import { ReportingquestionsComponent } from './speech/reportingquestions/reportingquestions.component';
    import { VerbsusedtoreportspeechComponent } from './speech/verbsusedtoreportspeech/verbsusedtoreportspeech.component';
    import { ReportordersrequestsandsuggestionsComponent } from './speech/reportordersrequestsandsuggestions/reportordersrequestsandsuggestions.component';
    import { ReporthopesrequestsandpromisesComponent } from './speech/reporthopesrequestsandpromises/reporthopesrequestsandpromises.component';
import { PunctuationComponent } from './punctuation/punctuation.component';
    import { PeriodComponent } from './punctuation/period/period.component';
    import { CommaComponent } from './punctuation/comma/comma.component';
    import { ExclamationmarkComponent } from './punctuation/exclamationmark/exclamationmark.component';
    import { ColonComponent } from './punctuation/colon/colon.component';
    import { SemicolonComponent } from './punctuation/semicolon/semicolon.component';
    import { QuestionmarkComponent } from './punctuation/questionmark/questionmark.component';
    import { ApostropheComponent } from './punctuation/apostrophe/apostrophe.component';
    import { HyphenanddashComponent } from './punctuation/hyphenanddash/hyphenanddash.component';
    import { ParenthesesandbracketsComponent } from './punctuation/parenthesesandbrackets/parenthesesandbrackets.component';
import { RelativeclausesComponent } from './relativeclauses/relativeclauses.component';
    import { DefiningclausesComponent } from './relativeclauses/definingclauses/definingclauses.component';
    import { NondefiningclausesComponent } from './relativeclauses/nondefiningclauses/nondefiningclauses.component';
import { PrepositionsComponent } from './prepositions/prepositions.component';
    import { CommonprepositionsComponent } from './prepositions/commonprepositions/commonprepositions.component';
    import { PhrasalverbsComponent } from './prepositions/phrasalverbs/phrasalverbs.component';


let routes = [
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
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  declarations: [
        GrammarHomeComponent,
        NounsComponent,
        PluralComponent,
        GenderComponent,
        CountableComponent,
        PronounsComponent,
        CompoundComponent,
        CapitalizationComponent,
        NationalitiesComponent,
        PossessivesComponent,
        AdjectivesComponent,
        ComparativesuperlativeComponent,
        CompareattributesComponent,
        EqualquantitiesComponent,
        UnequalquantitiesComponent,
        PlacementComponent,
        OrderComponent,
        AdverbsComponent,
        FromadjectivesComponent,
        PlaceComponent,
        TimeComponent,
        MannerComponent,
        DegreeComponent,
        CertaintyComponent,
        ViewpointandcommentingadverbsComponent,
        RelativeComponent,
        InterrogativeComponent,
        DeterminersComponent,
        DefinitearticlesComponent,
        IndefinitearticlesComponent,
        DemonstrativesComponent,
        PronounsandpossessivedeterminersComponent,
        QuantifiersComponent,
        NumbersComponent,
        DistributivesComponent,
        DifferencewordsComponent,
        PredeterminersComponent,
        VerbsComponent,
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
        SpeechComponent,
        DirectandindirectComponent,
        VerbtensesComponent,
        TimeandplacereferencesComponent,
        ReportingquestionsComponent,
        VerbsusedtoreportspeechComponent,
        ReportordersrequestsandsuggestionsComponent,
        ReporthopesrequestsandpromisesComponent,
        PunctuationComponent,
        PeriodComponent,
        CommaComponent,
        ExclamationmarkComponent,
        ColonComponent,
        SemicolonComponent,
        QuestionmarkComponent,
        ApostropheComponent,
        HyphenanddashComponent,
        ParenthesesandbracketsComponent,
        RelativeclausesComponent,
        DefiningclausesComponent,
        NondefiningclausesComponent,
        PrepositionsComponent,
        CommonprepositionsComponent,
        PhrasalverbsComponent
        ]
})
export class GrammarModule { }
