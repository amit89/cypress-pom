class ApiHelper {

    /**
     * Below method is capable of calling any request all we have to specify
     * which http request we want to call.
     * Also it will retrun object -> response: Cypress.Response<any> of type
     * @param method 
     * @param endPoint 
     * @param payload is optional so we can use same method for all the req. tyep
     * @returns 
     */
    httpRequest(method: string, endPoint: string, payload?: Cypress.RequestBody) {
        return cy.request({
            method: method,
            url: endPoint,
            body: payload,
            headers: {
                "content-type": "application/json",
                accept: 'application/json'
            }
        }).then((response) => {
            console.log('API Response:', response);
            return response;
        });
    }
}

export default ApiHelper;