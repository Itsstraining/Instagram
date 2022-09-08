import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthService: AuthService, private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  public account = {
    email: "",
    password: ""
  }

  async signUp() {
    try {
      let res = await this.AuthService.registerEmailAndPassword(this.account.email, this.account.password);
      console.log(res);
      this.showToast("success", "Đăng ký thành công!");
      window.location.href = "/home";
    } catch (error) {
      this.showToast("danger", "Đăng ký thất bại!");
    }

  }

  showToast(status: string, message: string) {
    this.toastrService.show("", message, {
      status: status
    });
  }

}
