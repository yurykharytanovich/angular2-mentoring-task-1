import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'loader-block',
  templateUrl: './loader-block.component.html',
  styleUrls: ['./loader-block.component.css']
})
export class LoaderBlockComponent implements OnInit {

  constructor(
      @Inject('loaderBlockService') private loaderBlockService,
  ) { }

  ngOnInit() {
  }

  unlock (event){
    event.stopPropagation();
    // this.loaderBlockService.show();
  }

}
