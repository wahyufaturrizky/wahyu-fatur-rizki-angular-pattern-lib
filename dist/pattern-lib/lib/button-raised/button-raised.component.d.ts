import { EventEmitter, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class ButtonRaisedComponent implements OnInit {
    constructor();
    label: string | null;
    color: ThemePalette;
    disabled: boolean;
    eventChange: EventEmitter<any>;
    ngOnInit(): void;
    onEventChange(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonRaisedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonRaisedComponent, "pl-button-raised", never, { "label": "label"; "color": "color"; "disabled": "disabled"; }, { "eventChange": "eventChange"; }, never, never, false, never>;
}
