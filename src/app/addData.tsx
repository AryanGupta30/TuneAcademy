import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);

interface Video {
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

export async function addDocumentToCollection() {
  const testTodo1: Video = {
    "id": "10",
        "title": "Blues Guitar Techniques",
        "slug": "blues-guitar-techniques",
        "description": "Discover the techniques of blues guitar to add soul and depth to your playing",
        "price": 189.99,
        "instructor": "Ethan Moore",
        "isFeatured": true,
        "image": "/courses/blues.jpg",
        "domain" :"Songwriting"
  };

  try {
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_2_ID!,
      testTodo1.id, // Use the id from testTodo1 as the document ID
      testTodo1
    );
    console.log('Document created successfully', response);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

addDocumentToCollection();

