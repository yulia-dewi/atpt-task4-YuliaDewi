import { expect, request } from "@playwright/test";
import { APIRequestContext } from "playwright";
import { variable } from "../../../resources/variables";
import { setAuth, auth as globalAuth } from '../../../auth/auth.store';
import { oauthLoginService } from "../service/spotify/login.service";

export async function oauthContext():Promise<APIRequestContext> {
    const clientId = '15166b3b22374105958232cbe5e72220';
    const clientSecret = 'a22f065400f64bc3ae7b9a3b20df2832';

    const base64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const context = await request.newContext({
        baseURL: variable.oauthurl,
        extraHTTPHeaders: {
            Authorization: `Basic ${base64}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    return context;
}

export async function spotifyContext():Promise<APIRequestContext> {
    if (globalAuth == undefined) {
        let loginService = new oauthLoginService();
        const response = await loginService.login();
    
        expect(response).toBeTruthy();
        setAuth(response.access_token);
      }

    const context = await request.newContext({
        baseURL: variable.spotifyurl,
        extraHTTPHeaders: {
          'Authorization': `Bearer ${globalAuth}`
        },
      });
    
      return context;
}
