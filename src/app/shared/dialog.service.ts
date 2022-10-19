import { trigger } from '@angular/animations';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, } from '@angular/core';


@Injectable()
export class DialogService {
  overlayRef: any;
  constructor(private overlay: Overlay) { }
  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>) {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
      width: 600,
    });
    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach()
    })
    const portal = new ComponentPortal(component);
    overlayRef.attach(portal);
  }
}
