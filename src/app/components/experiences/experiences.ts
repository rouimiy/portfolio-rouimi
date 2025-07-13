import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: false,
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class Experiences implements AfterViewInit{
  @ViewChild('carouselTrack', { static: false }) track!: ElementRef;

  ngAfterViewInit() {
    const track = this.track.nativeElement;
    const cards = track.querySelectorAll('.experience-card');
    const prevBtn = document.querySelector('.carousel-btn.prev') as HTMLElement;
    const nextBtn = document.querySelector('.carousel-btn.next') as HTMLElement;

    let index = 0;

    const updateSlide = () => {
      const offset = cards[0].clientWidth + 20;
      track.style.transform = `translateX(-${index * offset}px)`;
    };

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateSlide();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (index < cards.length - 1) {
        index++;
        updateSlide();
      }
    });

    updateSlide();
  }

}
