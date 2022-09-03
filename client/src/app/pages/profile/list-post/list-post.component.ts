import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000)
  }

  isLoading = false;

  public posts = [
    {
      image: "https://i.pinimg.com/564x/62/b4/82/62b482ef48a981eb4f1504cf8ba39836.jpg"
    },
    {
      image: "https://i.pinimg.com/564x/5b/cf/0f/5bcf0fc80025bb8d37636df826694d1d.jpg"
    },
    {
      image: "https://i.pinimg.com/564x/f5/17/de/f517de91d0cf3152ee1dd43e8635f3f3.jpg"
    },
    {
      image: "https://i.pinimg.com/564x/8c/ad/50/8cad504fae1fa6d4fd00d2d23923409e.jpg"
    }
  ]

}
