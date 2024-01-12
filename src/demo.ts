let x: any = { name: "Wruce Bayne" }; // this is not a good practice because it allow these 👇:
// x.id = 1234;
// x = "test";
// x.name = "test";
// x.bool = true;
// x = () => console.log("test");

let y: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }; // these are much better):
y.id = 1234;
y.name = "test";
y.bool = true;
y.log = () => console.log("test");
//y = []; // this is not allowed, because it's not a Record

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

// using helpers like "Partial" and "Omit" and "Pick"
type ContactQuery_before = Partial<Record<keyof Contact, Query>>

type ContactQuery_in_the_middle = 
    Omit< // key note 1: this is a way to remove properties from an interface
        Partial< // key note 2: this is a way to make all properties optional
            Record<keyof Contact, Query>
            >, 
        "address" | "status"
    >

    type ContactQuery = 
    Partial< // key note 3: this is a way to make all properties optional
        Pick< // key note 4: this is a way to make all properties required
            Record<keyof Contact, Query>,
            "id" | "name"
        > 
    >

    type RequiredContactQuery = Required<ContactQuery>; // key note 5: this is a way to make all properties required

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
        // phoneNumber: { matches: (name) => name === "Carol Weaver" },
    }
);