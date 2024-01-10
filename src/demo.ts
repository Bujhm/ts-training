type contactName = string;

//key note 1: or we can use union type
type contactBirthDate = Date | number | string

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
//key note 2: or we can use union type, shorter and better than "enum" type
type ContactStatus2 = "active" | "inactive" | "new"

interface Contact extends Address {  //key note 3: Here we adding Contact to Address
    id: number;
    name: contactName;
    birthDate?: contactBirthDate;
    //status: ContactStatus; //key note 4, this is also possible and workable with the "enum" type
    status: ContactStatus2;
}

interface Address {
    line1?: string;
    line2?: string;
    province?: string;
    region: string;
    postalCode?: string;
}

//key note 5: Here we adding Contact to Address
interface AddressContact extends Contact, Address {} 
//key note 6: or we can use intersection type
type AddressContact2 = Contact & Address

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 1,
    name: "John Doe",
    region: "New York",
    status:"active" //key note 7: Here we can use ContactStatus2 directly, auto suggestion will work
}
