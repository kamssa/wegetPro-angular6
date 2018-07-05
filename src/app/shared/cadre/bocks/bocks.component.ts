import { Component, OnInit, OnChanges } from '@angular/core';
import {BlockImagesService} from '../../personne/block-images.service';

@Component({
  selector: 'app-bocks',
  templateUrl: './bocks.component.html',
  styleUrls: ['./bocks.component.scss']
})
export class BocksComponent implements OnInit {
visibleImages: any[];
  constructor(private blockImageService: BlockImagesService) {
    this.visibleImages = this.blockImageService.getImages();
  }

  ngOnInit() {
  }

}
