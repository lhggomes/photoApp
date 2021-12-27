import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhotoApp';
  photos = [
    {
      url: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Homem-Aranha-Meme.jpg",
      description:  "Spider"
    },
    {
      url: "https://sm.ign.com/ign_br/screenshot/default/harry-potter-hbo-max_q8yn.jpg",
      description:  "Harry Potter"
    }
  ];

}
