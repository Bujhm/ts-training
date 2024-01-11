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

function getValue(source, propertyName) {
    return source[propertyName]
}