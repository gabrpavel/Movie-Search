import { Component } from "@angular/core";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  protected readonly faInstagram = faInstagram;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;

}
