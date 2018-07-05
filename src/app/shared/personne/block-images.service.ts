import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockImagesService {
  visibleImages = [];

  constructor() {
  }

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {'id': 1, 'category': 'immobilier', 'libelle': 'trouver une maison', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 2, 'category': 'Secteur informel', 'libelle': 'trouver un homme de metier', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 3, 'category': 'boasts', 'libelle': 'trouver un professeur', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 4, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 5, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 6, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 7, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 8, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 9, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 10, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 11, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 12, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 13, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 14, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 15, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'},
  {'id': 16, 'category': 'boasts', 'caption': 'view from a boats', 'url': 'assets/blocks/block6/immobilier.jpg'}

];
