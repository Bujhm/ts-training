type contactName = string;
type ContactStatus = "active" | "inactive" | "new"
type contactBirthDate = Date | number | string

interface Contact { 
    id: number;
    name: contactName;
    birthDate?: contactBirthDate;
    status: ContactStatus;
    email?: string;
}

let primaryContact: Contact = {
    id: 1,
    name: "John Doe",
    status: "active"
}

type ContactFields = keyof Contact;

// keyof will made constraint for ContactFileds and this will be suggesting you "id, birthDate, name, status, email" as possible values
const field: ContactFields = "email" 

// this is wrong version of getValue function
// function getValue(source, propertyName) {
//     return source[propertyName]
// }

// this is right version of getValue function but with Generics typing
function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

// this is the copy of previous function, but more generic using 2 generics
function getValue2<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName]
}

const value = getValue(primaryContact, "status"); // now this works correctly
console.log(value);

const value2 = getValue({min:1, max:200}, "max"); // after using Generic typing this will work also! 
console.log(value2);

const value3 = getValue2(primaryContact, "name"); // example of getValue2() function with 2 generics
console.log(value3);
