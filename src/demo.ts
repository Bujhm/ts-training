interface Customer {
    save(): void
}

class Customer {} // if this is 3rd party class and you need to exend with the properties so u need an interface

const customer = new Customer()
customer.save = function () {}

const myvar = window.MY_VAR

