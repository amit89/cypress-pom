/// <reference types="cypress" />
import ApiHelper from '../../lib/helper/api-helper';
import { RequestType, StatusCode } from '../../lib/enum/enum-type';
import endPoints from '../../fixtures/api-endpoints.json';
import payload from '../../fixtures/create-user-payload.json';

let apiHelper = new ApiHelper();
let token: string;

describe('API Automation Test Suite', () => {
    beforeEach(() => {
        cy.log('Will generate token here');
    })

    it('Test_01: Dummy test to validate the POST api', () => {

        apiHelper.httpRequest(RequestType.POST.valueOf(), endPoints.CREATE_USER, payload).then(response => {
            expect(response.status).to.eq(StatusCode.STATUS_201);
            expect(response.body).to.have.property('name', "morpheus");
        });
    });

    it('Test_02: Dummy test to validate the GET api', () => {

        apiHelper.httpRequest(RequestType.GET.valueOf(), endPoints.GET_USERS).then(response => {
            expect(response.status).to.eq(StatusCode.STATUS_200);
            expect(response.body).to.have.property('total', 12);
        });
    });

});



