export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

export interface About {
    name: string;
    title: string;
    skills: string[];
    experience: string[];
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}