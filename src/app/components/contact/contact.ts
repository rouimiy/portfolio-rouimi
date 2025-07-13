import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit() {
    (window as any).emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      document.querySelector('form'),
      'YOUR_USER_ID'
    ).then((result: any) => {
      alert('Message envoyé avec succès !');
    }, (error: any) => {
      alert('Erreur : ' + error.text);
    });
  }
}
