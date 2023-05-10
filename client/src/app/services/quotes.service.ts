import { Injectable } from '@angular/core';
import * as _mod  from'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private quotes: _mod.Quote[] = [
    { id: 1, text: 'How you doin\'?', translation: 'چطوری می‌شه تورو چطوری با این کرشم‌م پیدا کردم؟' },
    { id: 2, text: 'We were on a break!', translation: 'ما در حالی که آوازی با هم گوش می‌دادیم، بهترین رابطه دوستیمون رو آغاز کردیم.' },
    { id: 3, text: 'Pivot!', translation: 'چرخونده عکس‌العمل.' },
    { id: 4, text: 'Smelly cat, smelly cat, what are they feeding you?', translation: 'فرار مادر کپه به عنوان شیرینی سال' },
    { id: 5, text: 'The One Where Ross Got High', translation: 'تو رفته‌ای سر کار يک شرکتی که فرداي کارتون مي خواد کلی رو پاپ بریزه!'},
    { id: 6, text: 'Joey doesn\'t share food!', translation: 'گرسنگی جویی: اونقدر تو چربول های خودش گیر کرده که حتی غذا جدا کردن ازش براش مشکل شده'},
    { id: 7, text: 'Could I BE wearing any more clothes?', translation: 'مونیکا همیشه عاشق این بود که به نظر برسه بیشترین تعداد لباس رو به هم بپوشیده'},
    { id: 8, text: 'I know!', translation: 'من دقیقاً بدونم.ظاهر سلیقه-ی سالوادور، ضدشوهری،'},
    { id: 9, text: 'It\'s like all my children grew up and married each other', translation: 'راشل دقیقا میگه که "این شب شب قهرمانی منه" و هر کسی که سریال رو دیده میدونه راشل هست که غلبه کننده طرف مقابل'},
    { id: 10, text: 'I\'m not so good with the advice... Can I interest you in a sarcastic comment?', translation: 'قطار شوخی آرش نپور.' }
  ];

  constructor() { }

  getQuotes(): _mod.Quote[] {
    return this.quotes;
  }

}