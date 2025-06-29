import { expect, request } from "@playwright/test";
import { APIRequestContext } from "playwright";
import { setAuth, globalAuth } from '../../../auth/auth.store';
import { oauthLoginService } from "../service/spotify/login.service";
import { argParser } from "../../../utilities/environment.helper";
import { OauthUrl } from "../../../enum/oauth.enum";
import { SpotifyUrl } from "../../../enum/spotify.enum";

const urlHostOauth:string = argParser(OauthUrl.staging, OauthUrl.dev);
const urlHostSpotify:string = argParser(SpotifyUrl.staging, SpotifyUrl.dev);

export async function oauthContext():Promise<APIRequestContext> {
    const clientId = process.env.CLIENT_ID || '15166b3b22374105958232cbe5e72220';
    const clientSecret = process.env.SECRET_ID || 'a22f065400f64bc3ae7b9a3b20df2832';

    const base64 = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const context = await request.newContext({
        baseURL: urlHostOauth,
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
        baseURL: urlHostSpotify,
        extraHTTPHeaders: {
          'Authorization': `Bearer ${globalAuth}`
        },
      });
    
      return context;
}
