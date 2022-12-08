import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class ButtonComponent {
    constructor() {
        this.label = 'Text goes here';
        this.color = 'primary';
        this.disabled = false;
        this.eventChange = new EventEmitter();
    }
    ngOnInit() { }
    onEventChange(event) {
        this.eventChange.emit(event);
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: ButtonComponent, selector: "pl-button", inputs: { label: "label", color: "color", disabled: "disabled" }, outputs: { eventChange: "eventChange" }, ngImport: i0, template: "<button\n  mat-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pl-button', template: "<button\n  mat-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], eventChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhdHRlcm4tbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUS9FLE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBRVMsVUFBSyxHQUFrQixnQkFBZ0IsQ0FBQztRQUN4QyxVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFML0MsQ0FBQztJQU9oQixRQUFRLEtBQVUsQ0FBQztJQUVuQixhQUFhLENBQUMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7NEdBWlUsZUFBZTtnR0FBZixlQUFlLDRKQ1I1QiwySUFRQTsyRkRBYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFdBQVc7MEVBT1osS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGwtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bGwgPSAnVGV4dCBnb2VzIGhlcmUnO1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZXZlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvbkV2ZW50Q2hhbmdlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5ldmVudENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiPGJ1dHRvblxuICBtYXQtYnV0dG9uXG4gIFtjb2xvcl09XCJjb2xvclwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjbGljayk9XCJvbkV2ZW50Q2hhbmdlKCRldmVudClcIlxuPlxuICB7eyBsYWJlbCB9fVxuPC9idXR0b24+XG4iXX0=