import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuSection } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuSection({
      id: 'greeter',
      label: 'New Menu',
      items: [{
        id: 'greeter',
        label: 'Greeter',
        routerLink: ['/extensions/greet'],
        // Icon can be any of https://clarity.design/icons
        icon: 'star',
      }],
    },
    // Add this section before the "settings" section
    'settings'),
  ]
})
export class GreeterSharedModule {}