import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailsPage } from './emails.page';

describe('EmailsPage', () => {
  let component: EmailsPage;
  let fixture: ComponentFixture<EmailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
