import {Component} from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  sendEmail(): void {
    emailjs.sendForm(
      'service_s4q7grf',
      'template_q4k9wrl',
      document.querySelector('form') as HTMLFormElement,
      'uKIJupGKf4Eef-PX9'
    ).then(
      (result: any) => {
        alert('Message envoyé avec succès !');
      },
      (error: any) => {
        alert('Erreur : ' + error.text);
      }
    );
  }
}
