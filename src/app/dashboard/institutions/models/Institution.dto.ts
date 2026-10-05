export interface Institution {
    id: string,
    name: string,
    imageUrl: string,
    students: Student[],
    teacher: Teacher,
}

export interface InstitutionRequest {
    name: string,
    imageUrl: string,
    userId: string
}

export interface Teacher {
    name: string,
    userid: string
    teacherId: string,
    lastname: string,
    email: string
}


export interface Student {
    name: string,
    userid: string
    studentId: string,
    lastname: string,
    email: string
}

