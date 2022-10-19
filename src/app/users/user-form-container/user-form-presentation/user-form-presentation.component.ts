import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit {

  @Output() public saveUser:EventEmitter<any>;
  constructor() {
     this.saveUser=new EventEmitter();
   }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.saveUser.emit('test')
;  }

}
