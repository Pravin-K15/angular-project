import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {

  @Input() size : number = 30;
  @Input() content : string ="";

  contentSize : number = this.size;
  isShowMore : boolean = false;
  
  READ_MORE = "Read More";
  SHOW_LESS = "Show Less";

  constructor() { }

  ngOnInit(): void {
    this.contentSize = this.size;
  }

  showMore(){
    if(this.isShowMore){
      this.contentSize = this.size;
      this.isShowMore = false;
    }
    else{
      this.contentSize = this.content.length;
      this.isShowMore = true;
    }
  }
}
