/// <reference types="cypress" />
import { HomePage } from "../../pages/home-page";

const homePage = new HomePage();

describe('example to-do app', () => {
  beforeEach(() => {
    homePage.setupApp();
  })

  it('Test_01: This is positive dummy test for demo purpose', () => {
    homePage.dummyMethod1();
  })

  it('Test_02: This is negative dummy test for demo purpose', () => {
    homePage.dummyMethod2();
  })

})