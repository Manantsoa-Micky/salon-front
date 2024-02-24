import { Injectable } from '@angular/core';

import { Message, MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AppMessageService {
  constructor(private messageService: MessageService) {}

  showToast(message: Message) {
    this.messageService.add(message);
  }
}
