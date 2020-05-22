import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  DEFAULT_IMAGE_PATH = '../assets/images/default-event.png';

  @Input() eventsList;

  constructor() { }

  /* Method to get event image URL */
  getImagePath(event) {
    let imagePath = this.DEFAULT_IMAGE_PATH;
    if (event.images) {
      imagePath = event.images[0].sizes.small.url;
    } 
    return imagePath;
  }

  /* Method to set the default image for bad request for events image */
  imageErrorHandler(event) {
    event.target.src = this.DEFAULT_IMAGE_PATH;
  }

}
