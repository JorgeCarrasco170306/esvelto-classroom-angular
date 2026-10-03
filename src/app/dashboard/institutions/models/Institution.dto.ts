export interface Institution {
    id: string,
    name: string,
    imageUrl: string,
    students: string[],
    teacherId: string,
}

export interface InstitutionRequest {
    name: string,
    imageUrl: string,
    teacherId: string
}