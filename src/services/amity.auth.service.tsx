import { Client, API_REGIONS } from '@amityco/ts-sdk';
class AmityAuth {
    static client: Amity.Client;
    static sessionHandler: Amity.SessionHandler;
    static async init() {

        // await Client.login({ userId: '99',displayName:'99' }, this.sessionHandler);
    }
    static async login(username: string) {

        this.client = Client.createClient("b0e8ee0f6ed3f0311f628c1c5b5c1f89d7088fe4bb33667d", API_REGIONS.SG);
        this.sessionHandler = {
            sessionWillRenewAccessToken(renewal: Amity.AccessTokenRenewal) {
                // for details on other renewal methods check session handler
                renewal.renew();
            },
        }


        console.info("Login with id: " + username);
        try {
            await Client.login({ userId: username, displayName: username }, this.sessionHandler);
        } catch (e) {
            console.log(e)
        }

        console.log("Done sign in")
    }
    static async logout() {
        if (Client.isConnected()) {
            await Client.logout();
        }

    }
}

export default AmityAuth;