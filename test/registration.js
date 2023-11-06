const { describe, it } = require('mocha');
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

describe('Ibrat Academy', function () {

    it('Registration with correct data', async function () {
        const Registration = require('./pageobjects/registration.page')
        await Registration.lang.click()
        await Registration.nextBtn.click()
        await Registration.nextBtn1.click()
        await Registration.nextBtn1.click()
        await Registration.startBtn.click()
        await Registration.prflIcon.click()
        await Registration.loginBtn.click()
        await Registration.registrBtn.click()
        await Registration.nameFld.click()
        await Registration.nameFld.addValue("Muhammad")
        await Registration.surnameFld.click()
        await Registration.surnameFld.addValue("Saidmalikov")
        await Registration.nextBtn1.click()
        await Registration.pass1Fld.click()
        await Registration.pass1Fld.addValue("muhammad1911")
        await Registration.pass2Fld.click()
        await Registration.pass2Fld.addValue("muhammad1911")
        driver.touchPerform([ 
        { action: 'press', options: { x: 1330, y: 2830 }},
        { action: 'release' }
        ]);
        await Registration.nextBtn1.click()
        await Registration.phoneFld.click()
        await Registration.phoneFld.addValue("94 "+randomInteger(100, 999)+" 00 00")
        await Registration.nextBtn1.click()
        await Registration.smsFld.click()
        await Registration.smsFld.addValue("123456")
        await Registration.checkBtn.click()
        await browser.pause(3000)
    })


    it('Registration with incorrect data', async function () {
        const Registration = require('./pageobjects/registration.page')
        await Registration.lang.click()
        await Registration.nextBtn.click()
        await Registration.nextBtn1.click()
        await Registration.nextBtn1.click()
        await Registration.startBtn.click()
        await Registration.prflIcon.click()
        await Registration.loginBtn.click()
        await Registration.registrBtn.click()
        await Registration.nameFld.click()
        await Registration.nameFld.addValue("12345678")
        await Registration.surnameFld.click()
        await Registration.surnameFld.addValue("12345678")
        await Registration.nextBtn1.click()
        await Registration.pass1Fld.click()
        await Registration.pass1Fld.addValue("1234567")
        await Registration.pass2Fld.click()
        await Registration.pass2Fld.addValue("1234567")
        driver.touchPerform([ 
        { action: 'press', options: { x: 1330, y: 2830 }},
        { action: 'release' }
        ]);
        await Registration.nextBtn1.click()
        await Registration.phoneFld.click()
        await Registration.phoneFld.addValue("incorrect")
        await Registration.nextBtn1.click()
    })


    it('Registration with incorrect sms code', async function () {
        const Registration = require('./pageobjects/registration.page')
        await Registration.lang.click()
        await Registration.nextBtn.click()
        await Registration.nextBtn1.click()
        await Registration.nextBtn1.click()
        await Registration.startBtn.click()
        await Registration.prflIcon.click()
        await Registration.loginBtn.click()
        await Registration.registrBtn.click()
        await Registration.nameFld.click()
        await Registration.nameFld.addValue("Muhammad")
        await Registration.surnameFld.click()
        await Registration.surnameFld.addValue("Saidmalikov")
        await Registration.nextBtn1.click()
        await Registration.pass1Fld.click()
        await Registration.pass1Fld.addValue("muhammad1911")
        await Registration.pass2Fld.click()
        await Registration.pass2Fld.addValue("muhammad1911")
        driver.touchPerform([ 
        { action: 'press', options: { x: 1330, y: 2830 }},
        { action: 'release' }
        ]);
        await Registration.nextBtn1.click()
        await Registration.phoneFld.click()
        await Registration.phoneFld.addValue("94 "+randomInteger(100, 999)+" 00 00")
        await Registration.nextBtn1.click()
        await Registration.smsFld.click()
        await Registration.smsFld.addValue("123456")
        await Registration.checkBtn.click()
        await browser.pause(3000)
    })


    it('Registration with empty data', async function () {
        const Registration = require('./pageobjects/registration.page')
        await Registration.lang.click()
        await Registration.nextBtn.click()
        await Registration.nextBtn1.click()
        await Registration.nextBtn1.click()
        await Registration.startBtn.click()
        await Registration.prflIcon.click()
        await Registration.loginBtn.click()
        await Registration.registrBtn.click()
        await Registration.nameFld.click()
        await Registration.nameFld.addValue("          ")
        await Registration.surnameFld.click()
        await Registration.surnameFld.addValue("          ")
        await Registration.nextBtn1.click()
        await Registration.pass1Fld.click()
        await Registration.pass1Fld.addValue("           ")
        await Registration.pass2Fld.click()
        await Registration.pass2Fld.addValue("          ")
        driver.touchPerform([ 
        { action: 'press', options: { x: 1330, y: 2830 }},
        { action: 'release' }
        ]);
        await Registration.nextBtn1.click()
        await Registration.phoneFld.click()
        await Registration.phoneFld.addValue("             ")
        await Registration.nextBtn1.click()
    })
}
)