import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const Fields=['Account.TwitterID__c']
export default class TwitterHandlerComponent extends LightningElement {
    @api recordId
    twitterHandlerId ="SalesforceDevs"
    get fullTwitterUrl(){
        return 'https://prakash1653-dev-ed--c.na124.visual.force.com/apex/TwitterFeedPage?twitterHandle=${this.twitterHandlerId}'
    }

    @wire(getRecord, {recordId:'recordId', fields:Fields})
    wiredRecord({error,data}){
        if(data){
            this.twitterHandlerId = data.fields.TwitterID__c.value
        }
        if(error){
            console.error(error)
        }
    }
}