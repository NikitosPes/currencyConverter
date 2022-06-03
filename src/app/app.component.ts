import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { currencyRates } from './models/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  title = 'converter';
  currencyRates: currencyRates = { USD: 0, EUR: 0, BTC: 0, UAH: 1}

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.parseDataFromApi();
  }

  private parseDataFromApi(): void {
    this.currencyService.getCurrentExchangeRate().subscribe(res => {
      res.forEach(item => {
        this.currencyRates[`${item.ccy}`] = item.buy;
      })
    });
  }

}
