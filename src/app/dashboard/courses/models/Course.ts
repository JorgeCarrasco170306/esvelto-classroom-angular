export interface Course {
    id: string,
    name: string,
    institution: CourseInstitution;
}

interface CourseInstitution {
    name: string
}