import * as Actions from "../actions";
import {fromJS} from "immutable";

const defaultAdTags = {
    "page":0,
    "total":20,
    "limit":100,
    "elements":[
        {
            "id":"ebe85350-41e0-11e6-a61e-9a26f9dbd0be",
            "name":"polo",
            "type":"ONSITE_SCRIPT",
            "source":"POPUP",
            "state":"REJECTED",
            "fallbackUrl":"http://www.zeropark.com",
            "adultFilter":"ALL",
            "allowAudio": true,
            "allowPopup": true,
            "cpm":0.05,
            "biddingTimeout":300,
            "redirectMethod":"HTTP",
            "targets":[
                {
                    "id":"ec6dfe10-41e0-11e6-a4aa-0a27cc48f307",
                    "address":"www.koszulki.pl",
                    "state":"PENDING"
                },
                {
                    "id":"ec6dfe10-41e0-11e6-a4aa-0a27cc48f308",
                    "address":"www.google.pl",
                    "state":"ACTIVE"
                },
                {
                    "id":"ec6dfe10-41e0-11e6-a4aa-0a27cc48f309",
                    "address":"www.redtube.com",
                    "state":"REJECTED"
                },
                {
                    "id":"ec6dfe10-41e0-11e6-a4aa-0a27cc48f310",
                    "address":"www.youporn.com",
                    "state":"BANNED"
                }
            ]
        },
        {
            "id":"d8f7ed20-021e-11e6-9598-3ca9f4b0b3f4",
            "name":"xml1",
            "type":"URL",
            "source":"POPUP",
            "state":"ACTIVE",
            "fallbackUrl":"http://aaa.com",
            "adultFilter":"ALL",
            "allowAudio": false,
            "allowPopup": true,
            "domainIdType":"REAL_DOMAIN",
            "cpm":10.05,
            "keywordSeparators":",",
            "biddingTimeout":300,
            "redirectMethod":"HTTP",
            "url":"http://localhost:8083/{domain}?adTagId=d8f7ed20-021e-11e6-9598-3ca9f4b0b3f4&cpm={cpm}&keywords={keywords}&fallbackUrl={fallbackUrl}"
        },
        {
            "id":"963c4a90-fcd7-11e5-905a-0e565f477e43",
            "name":"XML",
            "type":"ZEROCLICK",
            "source":"DOMAIN",
            "state":"ACTIVE",
            "fallbackUrl":"",
            "adultFilter":"NON_ADULT",
            "allowAudio": true,
            "allowPopup": true,
            "domainIdType":"REAL_DOMAIN",
            "keywordSeparators":",",
            "biddingTimeout":300,
            "visitorTimeSeconds":15,
            "redirectMethod":"HTML",
            "url":"http://localhost:8083/zeroclick?feedid=963c4a90-fcd7-11e5-905a-0e565f477e43&domain={domain}&ip={ip}&useragent={useragent}"
        }
    ]
};

export default function (state = defaultAdTags, action) {
    return state;
}