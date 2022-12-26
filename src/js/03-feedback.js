import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";


updateOutput();

form.addEventListener("input", throttle(function saveData(){
    const data = {
        email: this.email.value,
        message: this.message.value
    };
    const data1 = JSON.stringify(data);
    localStorage.setItem(LOCALSTORAGE_KEY, data1);
}, 500));

function updateOutput() {
    try {
        const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
        if (savedData === null) {
            return undefined;
        } else {
            const parsedData = JSON.parse(savedData);
            email.value = parsedData.email;
            message.value = parsedData.message;
        };
    } catch (error) {
            console.error("Get state error", error.message);
    };
  
};

form.addEventListener("submit", filledFields);

function filledFields(evt) {
    evt.preventDefault();
    if (email.value === "" || message.value === "") {
        return alert("Усі поля повинні бути заповнені!");
    };
    console.dir({ email: email.value, message: message.value });
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();   
};


