/// <reference types="cypress" />
import { HomePage } from "../../pages/home-page";

const homePage = new HomePage();

describe('example to-do app', () => {
  beforeEach(() => {
    homePage.setupApp();
  })

  it('displays two todo items by default', () => {
    homePage.performtest();
  })

})
