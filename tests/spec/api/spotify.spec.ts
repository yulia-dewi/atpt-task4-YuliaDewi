import test, { expect } from "playwright/test";
import { oauthLoginService } from "../../api/service/spotify/login.service";
import { setAuth } from "../../../auth/auth.store";
import { searchArtistService } from "../../api/service/spotify/search_artist.service";

test.describe('Oauth API test', async () => {
    let loginService: oauthLoginService = new oauthLoginService();
    let searchArtistServices: searchArtistService = new searchArtistService();

    test.beforeAll('Get token',async () => {
        const response = await loginService.login();
        setAuth(response.access_token);
    })

    test('search artist Eminem', async () => {
        const {data , status} = await searchArtistServices.searchArtist('eminem');

        expect(status).toBe(200);
        expect(data).toBeTruthy();
        expect(data.artists.items[0].name).toEqual('Eminem');
    })

    test('search artist CoComelon', async () => {
        const {data , status} = await searchArtistServices.searchArtist('CoComelon');

        expect(status).toBe(200);
        expect(data).toBeTruthy();
        expect(data.artists.items[0].name).toEqual('CoComelon');
    })
})
