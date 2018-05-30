import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService, private sanitizer: DomSanitizer){}

  articles = [];
  selectedArticle: any;
  controllerSrc: any;


  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    let obs = this._httpService.getArticles();
    obs.subscribe(res=>{
      this.articles.push(res);
    })
  }


  showarticle(url) {
    this.selectedArticle = url;
    this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    console.log("the url is", this.selectedArticle);
  }

  // selectArticle() {
  //   this.selectedArticle = this.articles[0].articles[1].url;
  //   console.log("selected article is", this.selectedArticle);
  // }

  // displayArticle {

  // }
}