import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pixabay';
  imagesArray: any[] = [];
  loading : boolean = false

  async SwapImages(category: string) {
    this.loading = true;
    const response = await fetch(`https://pixabay.com/api/?key=35716097-095157818fa3448d33960631a&q=${category}&image_type=photo`);
    const data = await response.json();
    const images = data.hits;
  
    // Shuffle images randomly
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
  
    // Take the first 6 images
    this.imagesArray = images.slice(0, 6);
    this.loading = false;
  }
  
  
}

