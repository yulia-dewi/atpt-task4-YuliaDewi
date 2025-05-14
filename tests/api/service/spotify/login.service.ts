import { oauthContext } from "../../context/oauth.context";

export class oauthLoginService {
    async login() {
        try {
            const context = await oauthContext();
            const response = await context.post('api/token', {
                form: {
                    grant_type: 'client_credentials'
                }
            });

            const body = response.json();
            return body

        } catch(e) {
            throw e;
        }
    }
}