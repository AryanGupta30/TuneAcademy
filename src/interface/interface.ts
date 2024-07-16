import { Models } from 'appwrite';

export interface Video extends Models.Document {
    title: string;
    level: string;
    number: number;
    url: string;
}