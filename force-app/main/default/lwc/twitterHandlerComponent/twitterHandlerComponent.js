import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const Fields=['Account.TwitterID__c'] // Stores Twitter TID
export default class TwitterHandlerComponent extends LightningElement {
    @api recordId
    twitterHandlerId ="SalesforceDevs"
    get fullTwitterUrl(){
        return 'https://SFOrgVFDomain/apex/TwitterFeedPage?twitterHandle=${this.twitterHandlerId}'   // Company ORG VF Domain
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
