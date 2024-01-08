interface Contact {
    id: number;
    name: contactName;
    birthday?: Date; // is is optional because of "?"
}

let primaryContact: Contact = {
    id: 1,
    name: "John"
}

type contactName = string;