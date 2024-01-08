interface Contact {
    id: number;
    name: contactName;
    birthday?: Date; // is is optional because of "?"
    status: contactStatus;
}

type contactName = string;

enum contactStatus {
    Active, //Todo: here will be 0 if we'll use it, just rename it to "active"
    Inactive = "inactive",
    New = "new"
}

let primaryContact: Contact = {
    id: 1,
    name: "John",
    status: contactStatus.Inactive
}
