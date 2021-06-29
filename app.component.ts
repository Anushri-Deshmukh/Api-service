import { Posts } from './post';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API-service';
  lstcomments:Comment[];
  lstPosts:Posts[];
  objPosts:Posts;
  constructor(private apiservice:ApiService){}

  ngOnInit(){
 this.apiservice.getcomment()
 .subscribe(
   data=>{
this.lstcomments=data;
   }
 );
 this.apiservice.getcmmentbyparameter()
 .subscribe(
   data=>{
     this.lstPosts=data;
   }
 );
  
var opost=new Posts();
opost.body='testbody';
opost.title='testtitle';opost.userId=5;
this.apiservice.post(opost)
.subscribe(
  data=>{
    this.objPosts=data;
  }
)
}


}
