export interface Course {
    id: string,
    name: string,
    institution: CourseInstitution;
}

interface CourseInstitution {
    id: string,
    name: string
}

export interface CourseRequest {
    name: string,
    institutionId: string
}