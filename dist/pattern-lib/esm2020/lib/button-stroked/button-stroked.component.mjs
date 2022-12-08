import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class ButtonStrokedComponent {
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
ButtonStrokedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonStrokedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonStrokedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: ButtonStrokedComponent, selector: "pl-button-stroked", inputs: { label: "label", color: "color", disabled: "disabled" }, outputs: { eventChange: "eventChange" }, ngImport: i0, template: "<button\n  mat-stroked-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: ButtonStrokedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pl-button-stroked', template: "<button\n  mat-stroked-button\n  [color]=\"color\"\n  [disabled]=\"disabled\"\n  (click)=\"onEventChange($event)\"\n>\n  {{ label }}\n</button>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], eventChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXN0cm9rZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGF0dGVybi1saWIvc3JjL2xpYi9idXR0b24tc3Ryb2tlZC9idXR0b24tc3Ryb2tlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXR0ZXJuLWxpYi9zcmMvbGliL2J1dHRvbi1zdHJva2VkL2J1dHRvbi1zdHJva2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVEvRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDO1FBRVMsVUFBSyxHQUFrQixnQkFBZ0IsQ0FBQztRQUN4QyxVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFML0MsQ0FBQztJQU9oQixRQUFRLEtBQVUsQ0FBQztJQUVuQixhQUFhLENBQUMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7bUhBWlUsc0JBQXNCO3VHQUF0QixzQkFBc0Isb0tDUm5DLG1KQVFBOzJGREFhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxtQkFBbUI7MEVBT3BCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BsLWJ1dHRvbi1zdHJva2VkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1zdHJva2VkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLXN0cm9rZWQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uU3Ryb2tlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVsbCA9ICdUZXh0IGdvZXMgaGVyZSc7XG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBldmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uRXZlbnRDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Q2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gIG1hdC1zdHJva2VkLWJ1dHRvblxuICBbY29sb3JdPVwiY29sb3JcIlxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAoY2xpY2spPVwib25FdmVudENoYW5nZSgkZXZlbnQpXCJcbj5cbiAge3sgbGFiZWwgfX1cbjwvYnV0dG9uPlxuIl19