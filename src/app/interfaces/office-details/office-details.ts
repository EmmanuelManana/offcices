interface StaffMember{
    name: string,
    lastname: string
}


export interface Office {
    id?: string;
    name?: string;
    location?: string;
    email?: string;
    tellNumber?: string;
    maxNumberOfOccupants?: number;
    color?: string;
    staffMembers?: StaffMember[];
}
