import { Selector } from 'testcafe';

class WelcomeAPI {
    constructor () {
        this.hostname = 'http://localhost';
        this.port = '3001';
        this.path = '/';
        this.method = 'post';
    }
}

export default new WelcomeAPI();