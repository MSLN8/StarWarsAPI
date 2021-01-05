import { Component, OnInit } from '@angular/core';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'U1Dl8-q2Spa3MliKu_BWtim3xe1bEC2CCesqhZ4fLqg',
});

@Component({
  selector: 'page-404',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
  photo: any;

  ngOnInit(): void {
    unsplash.photos.get({ photoId: 'cPF2nlWcMY4' }).then((result) => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
      } else {
        this.photo = result.response;
        console.log(this.photo);
      }
    });
  }
}
