import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobileSubject = new BehaviorSubject<boolean>(null);
  public isMobile: Observable<boolean>;
  public screenWidth: string;

  constructor() {
    this.checkWidth();
    this.isMobile = this.isMobileSubject.asObservable();
  }

  public get currentMobileValue(): boolean {
    return this.isMobileSubject.value;
  }

  onMobileChange(status: boolean) {
    this.isMobileSubject.next(status);
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.screenWidth = 'sm';
      this.onMobileChange(true);
    } else if (width > 768 && width <= 992) {
      this.screenWidth = 'md';
      this.onMobileChange(false);
    } else {
      this.screenWidth = 'lg';
      this.onMobileChange(false);
    }
  }
}
