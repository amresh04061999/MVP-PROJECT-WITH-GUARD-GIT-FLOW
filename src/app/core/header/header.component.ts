import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog.service';
import { UserFormContainerComponent } from 'src/app/users/user-form-container/user-form-container.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userProfileName: string
  constructor(private dilogservices: DialogService,
    private authServices: AuthService) {
    this.userProfileName = ''
  }

  ngOnInit(): void {
    this.authServices.profileName.subscribe(res => {
      this.userProfileName = res
    })
  }
  public onSignupOpen() {
    this.dilogservices.open(UserFormContainerComponent)
  }

}



