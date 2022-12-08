import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

class ButtonComponent {
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

class ButtonRaisedComponent {
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

class ButtonStrokedComponent {
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

class PatternLibModule {
}
PatternLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PatternLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PatternLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: PatternLibModule, declarations: [ButtonComponent,
        ButtonRaisedComponent,
        ButtonStrokedComponent], imports: [MatButtonModule], exports: [ButtonComponent, ButtonRaisedComponent] });
PatternLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PatternLibModule, imports: [MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PatternLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent,
                        ButtonRaisedComponent,
                        ButtonStrokedComponent,
                    ],
                    imports: [MatButtonModule],
                    exports: [ButtonComponent, ButtonRaisedComponent],
                }]
        }] });

/*
 * Public API Surface of pattern-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonRaisedComponent, PatternLibModule };
//# sourceMappingURL=axiata-digital-labs-angular-pattern-lib.mjs.map
//# sourceMappingURL=axiata-digital-labs-angular-pattern-lib.mjs.map
