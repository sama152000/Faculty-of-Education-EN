import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeKeySharedUi } from './code-key-shared-ui';

describe('CodeKeySharedUi', () => {
  let component: CodeKeySharedUi;
  let fixture: ComponentFixture<CodeKeySharedUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeKeySharedUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeKeySharedUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
