import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Filter } from 'src/app/models/filter/filter';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  httpclient;

  private filtersChange$: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(null);
  filtersChange = this.filtersChange$.asObservable();
  filters: Filter;

  constructor(http: HttpClient) {
    this.httpclient = http;
  }

  setFilters(filters: Filter) {
    this.filters = filters;
    this.filtersChange$.next(this.filters);
  }

  getFilters() {
    return this.filters;
  }

  getUrl(url: string): Observable<any> {
    return this.httpclient.get(url, {
      params: {
        method: 'JSONP'
      }
    });
  }

  checkIfNeedIframe(url: string) {
    if (this.checkIsVideo(url) || this.checkIsGifEmbed(url)) {
      return true;
    }
    return false;
  }

  checkIsVideo(url: string) {
    // TODO
    return false;
  }

  checkIsGifEmbed(url: string) {
    // TODO
    return false;
  }

  checkIsGif(url: string) {
    if (url.indexOf('gif') !== -1) {
      return true;
    }
    return false;
  }


  checkIsImage(url: string) {
    if (url.indexOf('jpg') !== -1) {
      return true;
    }
    if (url.indexOf('png') !== -1) {
      return true;
    }
    return false;
  }


}
