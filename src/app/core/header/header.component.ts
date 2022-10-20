import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog.service';
import { UserFormContainerComponent } from 'src/app/users/user-form-container/user-form-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dilogservices: DialogService) { }

  ngOnInit(): void {
  }
  public onSignupOpen() {
  this.dilogservices.open(UserFormContainerComponent)
 }
}
  
 

