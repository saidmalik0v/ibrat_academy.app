const { $ } = require('@wdio/globals')

class Registration {

    get lang () {
        return $('//android.widget.ImageView[@content-desc="Русский"]');  //system language
    }
    get nextBtn () {
        return $('//android.widget.Button[@content-desc="Keyingi"]');  //uz next button 
    }
    get nextBtn1 () {
        return $('//android.widget.Button[@content-desc="Следующий"]');   //ru next button 
    }
    get startBtn () {
        return $('//android.widget.Button[@content-desc="Начать"]');   //start button
    }
    get prflIcon () {
        return $('//android.widget.ImageView[@content-desc="Профиль"]');    //profile icon
    }
    get loginBtn () {
        return $('//android.widget.Button[@content-desc="Войти"]');   //login button
    }
    get registrBtn () {
        return $('//android.widget.Button[@content-desc="Регистрация"]');   //registration button
    }
    get nameFld () {
        return $('//android.widget.EditText[@index="2"]');   //username field
    }
    get surnameFld () {
        return $('//android.widget.EditText[@index="4"]');   //surname field
    }
    get pass1Fld () {
        return $('//android.widget.EditText[@index="3"]');   //password field
    }
    get pass2Fld () {
        return $('//android.widget.EditText[@index="5"]');   //confirm password field
    }
    get phoneFld () {
        return $('//android.widget.EditText');   //phone number field
    }
    get smsFld () {
        return $('//android.widget.EditText[@index="2"]');   //sms code field
    }
    get checkBtn () {
        return $('//android.widget.Button[@content-desc="Проверить"]');   //check button
    }  

}

module.exports = new Registration();
