import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  result: number = 0;

  constructor(private utilityService: UtilityService) {
  
  }

  ngOnInit(): void {
    this.result = this.utilityService.sum(4, 9);
  }

}
