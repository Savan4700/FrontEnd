import { Injectable } from '@angular/core';
import { LokSabha } from '../../../Model/LokSabha';

@Injectable({
  providedIn: 'root'
})
export class LokSabhaCreateService {
  errors: Array<string> = new Array<string>();
  textForAddorUpdate = 'New';
  lokSabha = new LokSabha();
  constructor() { }

  hideErrorDiv() {
    this.errors = new Array<string>();
  }
}
