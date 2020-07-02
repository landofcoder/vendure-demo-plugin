import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { hostExternalFrame } from '@vendure/admin-ui/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      hostExternalFrame({
        path: '',
        breadcrumbLabel: 'React App',
        // This is the URL to the compiled React app index.
        // The next step will explain the "assets/react-app" path.
        extensionUrl: './assets/react-app/index.html',
        openInNewTab: false,
      }),
    ]),
  ],
})
export class ReactUiExtensionModule {}