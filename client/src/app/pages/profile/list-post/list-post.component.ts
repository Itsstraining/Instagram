import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private PostService: PostService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000)
  }

  isLoading = false;

  @Input() posts: any = [];

  detail(dialog: any, post: any) {
    this.PostService.getPostById(post._id).subscribe((res: any) => {
      console.log(res)
      this.dialogService.open(dialog, { context: res });
    })
  }


}
