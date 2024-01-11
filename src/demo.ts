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
}

interface ContactEvent {
    contactId: Contact["id"]; // here is indexed typing
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"]; // here
    newStatus: Contact["status"]; // and here
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void | object
) {
    if (eventName === "statusChanged") {
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" })
    }
    // if (eventName === "deleted") {
    //    handler({contactId: 1 } as ContactDeletedEvent) // here willbe an error, because it should implement 2 interfaces
    //}
    // if (eventName === "deleted") {
    //     handler({ contactId: 1, oldStatus: "active", newStatus: "inactive"})  // here everything will be OK
    // }
}

handleEvent("statusChanged", evt => evt)