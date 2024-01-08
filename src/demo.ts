interface Contact extends Address{
    id: number;
    name: string;
    birthday?: Date; // is is optional because of "?"
}

// it warns because it needs we add missing properties from Address interface
let primaryContact: Contact = {
    id: 1,
    name: "John"
}

interface Address {
    line1: string;
    line2: string;
    postalCode: string;
    province: string;
    region: string;
}