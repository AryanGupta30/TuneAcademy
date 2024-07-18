import { Models } from 'appwrite';

export interface Video extends Models.Document {
    title: string;
    level: string;
    number: number;
    url: string;
}

export interface Course extends Models.Document {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
    domain: string;
}