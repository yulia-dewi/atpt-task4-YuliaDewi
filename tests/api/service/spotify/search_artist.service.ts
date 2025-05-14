import { spotifyContext } from "../../context/oauth.context";

export class searchArtistService {
    async searchArtist(artist: string) {
        try {
            const context = await spotifyContext();
            const response = await context.get(`v1/search?q=${artist}&type=artist`);
            
            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            }
        } catch (e) {
            throw e;
        }
    }
}