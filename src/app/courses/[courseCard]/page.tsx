'use client'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import selectedCourses from "@/data/music_courses.json"
import Link from "next/link";
import { Course } from "@/interface/interface";
import { databases,Query } from '@/lib/appwrite';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageProps {
  domain: string;
}
function convert(input : string) {
    // Split the string by hyphens
    const words = input.split('-');
  
    // Capitalize the first letter of each word and join them with spaces
    const result = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
    return result;
  }

function Page() {
  // const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const pathname = usePathname();
  const name = pathname.split('/').pop() || '/';
  const domain = convert(name);
//   console.log(domain);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        let queries: any[] = [];
        if (domain === 'All') {
            queries.push(Query.isNotNull('domain'));
          } else {
            queries.push(Query.equal('domain', domain));
          }
          console.log('Queries:', queries);

        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_2_ID!,
          queries
        );
        console.log('Response',response);

        if (response && response.documents.length > 0) {
          const courses: Course[] = response.documents.map(doc => ({
            $id: doc.$id,
            $createdAt: doc.$createdAt,
            $updatedAt: doc.$updatedAt,
            $collectionId: doc.$collectionId,
            $databaseId: doc.$databaseId,
            $permissions: doc.$permissions,
            id: doc.id, // Assuming 'id' is a string
            title: doc.title,
            slug: doc.slug,
            description: doc.description,
            price: doc.price,
            instructor: doc.instructor,
            isFeatured: doc.isFeatured,
            image: doc.image,
            domain: doc.domain,
          }));
          console.log(courses);
          setSelectedCourses(courses);
        } else {
          setSelectedCourses([]);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setSelectedCourses([]);
      }
    };

    fetchCourse();
  }, [domain]);

  return (
    <>
    <div className="min-h-screen bg-black py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">{domain}  ({selectedCourses.length})</h1>
        <div className="flex flex-wrap justify-center">
            {selectedCourses.map((course) => (
                <CardContainer  key={course.id} className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <Link href={`/courses/${domain}/content/${course.slug}`}>Sign up</Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>
    </div>
    </>
  )
}

export default Page