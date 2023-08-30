import { pageFixture } from '../hooks/pageFixture';

export class HomePage {

    get accountSummaryTab(){
        return pageFixture.page.locator('#account_summary_tab')
    }

}