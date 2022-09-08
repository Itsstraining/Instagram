import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 0)
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

  detail() {
    console.log("dialog");
    // this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }

}
