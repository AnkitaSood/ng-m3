import {Component, forwardRef} from '@angular/core';
import {CdkStep, CdkStepper, CdkStepperModule} from "@angular/cdk/stepper";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  imports: [forwardRef(() => CustomStepper), CdkStepperModule],
})
export class StepperComponent {}

/** Custom CDK stepper component */
@Component({
  selector: 'example-custom-stepper',
  templateUrl: './example-custom-stepper.html',
  styleUrl: './example-custom-stepper.scss',
  providers: [{provide: CdkStepper, useExisting: CustomStepper}],
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule],
})
export class CustomStepper extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
