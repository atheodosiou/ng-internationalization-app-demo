export class PersonInfo {
    constructor(
        public PersonId: number,
        public PersonName: string,
        public Address: string,
        public City: string,
        public State: string,
        public Occupation: string
    ) { }
}

export const States: String[] = [
    'Maharashtra',
    'Telengana',
    'Karnataka',
    'Gujarat',
    'Rajasthan'
];

export const Occupations: String[] = [
    'Employeed', 'Self-Employeed', 'Un-Employeed'
];