import {
    examplePaymentHandler,
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureConfig,
} from '@vendure/core'; 
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';

export const config: VendureConfig = {
    apiOptions: {
        port: 3000,
        adminApiPath: 'admin-api',
        adminApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },// turn this off for production
        adminApiDebug: true, // turn this off for production
        shopApiPath: 'shop-api',
        shopApiPlayground: { 
            settings: {
                'request.credentials': 'include',
            } as any,
        },// turn this off for production
        shopApiDebug: true,// turn this off for production
    },
    authOptions: {
        sessionSecret: '6znh2ryh1i',
        superadminCredentials: {
            identifier: 'superadmin',
            password: 'superadmin',
        },
    },
    dbConnectionOptions: {
        type: 'sqlite',
        synchronize: false, // not working with SQLite/SQL.js, see https://github.com/typeorm/typeorm/issues/2576
        logging: false,
        database: path.join(__dirname, '../vendure.sqlite'),
        migrations: [path.join(__dirname, '../migrations/*.ts')],
    },
    paymentOptions: {
        paymentMethodHandlers: [examplePaymentHandler],
    },
    customFields: {},
    plugins: [
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: path.join(__dirname, '../static/assets'),
            port: 3001,
        }),
        DefaultJobQueuePlugin,
        DefaultSearchPlugin,
        EmailPlugin.init({
            devMode: true,
            outputPath: path.join(__dirname, '../static/email/test-emails'),
            mailboxPort: 3003,
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../static/email/templates'),
            globalTemplateVars: {
                // The following variables will change depending on your storefront implementation
                fromAddress: '"example" <noreply@example.com>',
                verifyEmailAddressUrl: 'http://localhost:8080/verify',
                passwordResetUrl: 'http://localhost:8080/password-reset',
                changeEmailAddressUrl: 'http://localhost:8080/verify-email-address-change'
            },
        }),
        AdminUiPlugin.init({
            port: 3002,
            app: compileUiExtensions({
              outputPath: path.join(__dirname, '../__admin-ui'),
              extensions: [{
                // Points to the path containing our Angular "glue code" module
                extensionPath: path.join(__dirname, 'ui-extension/modules'),
                ngModules: [
                  {
                    // We want to lazy-load our extension...
                    type: 'lazy',
                    // ...when the `/admin/extensions/react-ui` 
                    // route is activated 
                    route: 'react-ui',
                    // The filename of the extension module 
                    // relative to the `extensionPath` above
                    ngModuleFileName: 'react-extension.module.ts',
                    // The name of the extension module class exported
                    // from the module file.
                    ngModuleName: 'ReactUiExtensionModule',
                  },
                ],
                staticAssets: [
                  // This is where we tell the compiler to copy the compiled React app
                  // artifacts over to the Admin UI's `/static` directory. In this case we
                  // also rename "build" to "react-app". This is why the `extensionUrl`
                  // in the module config points to './assets/react-app/index.html'.
                  { path: path.join(__dirname, '/ui-extension/react-app/build'), rename: 'react-app' },
                ],
              }],
              devMode: true,
            }),
          }),
    ],
};
