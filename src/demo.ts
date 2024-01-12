type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
    email: string;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

 type ContactQuery = Partial<Record<keyof Contact, Query>>

// this is a function that takes an array of contacts and a query object and returns a filtered array of contacts
function searchContacts(contacts: Contact[], query: ContactQuery ) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) { // here is the magic, strict type checking
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);