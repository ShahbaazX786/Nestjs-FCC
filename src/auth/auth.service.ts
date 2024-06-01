import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor() {}
  signup() {
    return 'Bismillah';
  }

  signin() {
    return 'Alhamdullilah';
  }
}
