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

// this is right version of getValue function
function getValue(source, propertyName: keyof Contact) {
    return source[propertyName]
}

const value = getValue(primaryContact, "status"); //here willbe undefided without static typing 
console.log(value);