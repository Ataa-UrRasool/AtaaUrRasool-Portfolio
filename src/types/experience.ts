export interface Experience {
    id: number;
    title: string;
    company: string;
    employmentType: string;
    startDate: string;
    endDate: string;
    location: string;
    locationType: string;
    description: string[];
    skills: string[];
    current?: boolean;
}
