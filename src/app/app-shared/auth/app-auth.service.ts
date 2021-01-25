import { Injectable } from '@angular/core';


@Injectable()
export class AppAuthService {

    logout(reload?: boolean, returnUrl?: string): void {
        //abp.auth.clearToken();
        if (reload !== false) {
            if (returnUrl) {
                location.href = returnUrl;
            } else {
                //location.href = AppConsts.appBaseUrl;
            }
        }
    }
}
