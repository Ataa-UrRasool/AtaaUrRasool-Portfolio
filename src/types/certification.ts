export interface Certification {
    id: number;
    title: string;
    issuer: string;
    issueDate: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
    logoUrl?: string;
}
