

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

// here we use the type assertion operator with pipeline operator, see the autosuggestion when using this function below, toContact(...
function toContact(nameOrContact: string | Contact): Contact {
    if (typeof nameOrContact === "object") {
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

const myType = {min: 1, max: 20}

// here we use typeof operator to get the type of the object
function saveRange(source: typeof myType) {}

saveRange(primaryContact) // here will be an error
saveRange(myType) 
saveRange({min:-50, max:50}) 