import { pageFixture } from '../hooks/pageFixture';

export class HomePage {

    get navTabs(){
        return pageFixture.page.locator('#searchterm')
    }

}