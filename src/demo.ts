type contactName = string;
type ContactStatus = "active" | "inactive" | "new"
type contactBirthDate = Date | number | string

interface Contact { 
    id: number;
    name: contactName;
    birthDate?: contactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 1,
    name: "John Doe",
    status: "active"
}

function toContact(nameOrContact) {
    if (nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    else {
        return {
            id: 0,
            name: nameOrContact,
            status: "active"
        }
    }
}

console.log(toContact(primaryContact));
console.log(toContact("Some name"));
