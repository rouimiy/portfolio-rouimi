import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  sendEmail() {
    (window as any).emailjs.sendForm(
      'service_m39n7fr',
      'template_q4k9wrl',
      document.querySelector('form'),
      'uKIJupGKF4Eef-PX9'
    ).then((result: any) => {
      alert('Message envoyé avec succès !');
    }, (error: any) => {
      alert('Erreur : ' + error.text);
    });
  }
}
