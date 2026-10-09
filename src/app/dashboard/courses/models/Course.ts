import { Student } from "../../institutions/models/Institution.dto";

export interface Course {
    id: string,
    name: string,
    institution: CourseInstitution;
    students : Student[]
}

interface CourseInstitution {
    id: string,
    name: string
}

export interface CourseRequest {
    name: string,
    institutionId: string
}

