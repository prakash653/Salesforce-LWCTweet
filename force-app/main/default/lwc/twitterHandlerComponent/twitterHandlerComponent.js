import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = ['Account.TwitterID__c'];
export default class TwitterHandlerComponent extends LightningElement {
    @api recordId;
    twitterHandlerId ="SalesforceDevs";
    loading = false;
    sfdcBaseURL;
    get fullTwitterUrl(){
        return this.sfdcBaseURL+`/apex/TwitterFeedPage?twitterHandle=${this.twitterHandlerId}`
    }
    connectedCallback() {
        this.loading = true;
        this.sfdcBaseURL = window.location.origin;
    }
    renderedCallback() {
        this.loading = false;
    }

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading Twitter Account Page',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) {
            let message = 'Success!';
            if(data.fields.TwitterID__c.value){
                this.twitterHandlerId = data.fields.TwitterID__c.value;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Twitter Account ID updated Successfully',
                        message,
                        variant: 'success',
                    }),
                );
            }           
        }
    }    
}
