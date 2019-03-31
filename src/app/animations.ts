import { trigger, transition, animate, style } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate(3000)
    ])
  ])