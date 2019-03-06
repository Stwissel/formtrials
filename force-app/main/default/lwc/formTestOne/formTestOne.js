import { LightningElement, api } from 'lwc';
import COLOR1_FIELD from '@salesforce/schema/LWC_Edit__c.Text_Color__c';
import COLOR2_FIELD from '@salesforce/schema/LWC_Edit__c.Pick_Color__c';
import NAME_FIELD from '@salesforce/schema/LWC_Edit__c.Name';
import SUMMARY_FIELD from '@salesforce/schema/LWC_Edit__c.Summary__c';

export default class FormTestOne extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api color;

    color1Field = COLOR1_FIELD;
    color2Field = COLOR2_FIELD;
    nameField = NAME_FIELD;
    summaryField = SUMMARY_FIELD;

    handleLoad(event) {
        /* eslint-disable no-debugger */
        debugger;
        /* eslint-disable no-console */
        console.log('data loaded');
        console.log(event.detail.objectInfos);
        this.updateFieldValue('Text_Color__c', 'Outside supplied');
    }

    updateFieldValue(fieldName, fieldValue) {
        let querySelector = 'lightning-input-field[name="' + fieldName + '"]';
        let ele = this.template.querySelector(querySelector);
        ele.value = fieldValue;
    }

    handleRecordCreated(event) {
        /* eslint-disable no-console */
        console.log('record created');
        console.log(event.detail);
    }

    connectedCallback() {
        /* eslint-disable no-console */
        console.log('connected callback');
    }
}
