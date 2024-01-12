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

interface Query<TProp> {
    sort?: 'asc' | 'desc';
    matches(val: TProp): boolean;
}

//  type ContactQuery = Partial<Record<keyof Contact, Query>>

// this is the same as the above, but with a little more code and more readable 
type ContactQuery = {
    [TProp in keyof Contact]?: Query<Contact[TProp]>  // that adopts to each target property, index satic type
}

// this is a function that takes an array of contacts and a query object and returns a filtered array of contacts
function searchContacts(contacts: Contact[], query: ContactQuery ) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) { // here is the magic, strict type checking
            // get the query object for this property
            const propertyQuery = query[property] as Query<Contact[keyof Contact]>; // the as is a little bit of a hack, but it works
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