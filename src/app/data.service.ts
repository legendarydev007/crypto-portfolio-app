import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getData() {
    // return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
    return this._http.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=1000')
      .map(result =>  {
        return this.result = result;
      });
  }

  getLastSevenDaysPrices(name: String, forDays: Number) {
    return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + name.toUpperCase() +
      '&tsym=USD&limit=' + forDays).map(result =>  {
        return this.result = result;
    });
  }

  public sortDataByKey(array, keyToSortBy) {
    function sortByKey(a, b) {
        const x = a[keyToSortBy];
        const y = b[keyToSortBy];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    return array.sort(sortByKey);
  }
}
