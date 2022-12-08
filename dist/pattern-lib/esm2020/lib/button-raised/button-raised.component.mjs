import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class ButtonRaisedComponent {
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
ButtonRaisedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonRaisedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonRaisedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: ButtonRaisedComponent, selector: "pl-button-raised", inputs: { label: "label", color: "color", disabled: "disabled" }, outputs: { eventChange: "eventChange" }, ngImport: i0, template: "<button\n  mat-raised-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonRaisedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pl-button-raised', template: "<button\n  mat-raised-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], eventChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhaXNlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2J1dHRvbi1yYWlzZWQvYnV0dG9uLXJhaXNlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2J1dHRvbi1yYWlzZWQvYnV0dG9uLXJhaXNlZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRL0UsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQztRQUVTLFVBQUssR0FBa0IsZ0JBQWdCLENBQUM7UUFDeEMsVUFBSyxHQUFpQixTQUFTLENBQUM7UUFDaEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTC9DLENBQUM7SUFPaEIsUUFBUSxLQUFVLENBQUM7SUFFbkIsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2tIQVpVLHFCQUFxQjtzR0FBckIscUJBQXFCLG1LQ1JsQyxrSkFRQTsyRkRBYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0Usa0JBQWtCOzBFQU9uQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwbC1idXR0b24tcmFpc2VkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1yYWlzZWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tcmFpc2VkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblJhaXNlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVsbCA9ICdUZXh0IGdvZXMgaGVyZSc7XG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBldmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uRXZlbnRDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Q2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gIG1hdC1yYWlzZWQtYnV0dG9uXG4gIFtjb2xvcl09XCJjb2xvclwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjbGljayk9XCJvbkV2ZW50Q2hhbmdlKCRldmVudClcIlxuPlxuICB7eyBsYWJlbCB9fVxuPC9idXR0b24+XG4iXX0=