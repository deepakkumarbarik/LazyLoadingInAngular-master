import * as ngCommon from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
//import { AbpModule } from '@abp/abp.module';

import { AppSessionService } from './app-session.service';
import {AppAuthService} from './auth/app-auth.service';
import {AppRouteGuard} from './auth/auth-route-guard'
//import { AppUrlService } from './nav/app-url.service';
//import { AppUiCustomizationService } from './ui/app-ui-customization.service';



@NgModule({
    imports: [
        ngCommon.CommonModule,
        //AbpModule
    ]
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders<AppCommonModule> {
        return {
            ngModule: AppCommonModule,
            providers: [
                AppSessionService,
                AppAuthService,
                AppRouteGuard
               // AppUrlService,
               // AppUiCustomizationService
            ]
        };
    }
}
