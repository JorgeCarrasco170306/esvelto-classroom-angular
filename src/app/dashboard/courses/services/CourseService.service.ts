import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { Course, CourseRequest } from "../models/Course";
import { PageResposne } from "../../shared/models/PageResponse.dto";

@Service()
export class CourseService {

    private http = inject(HttpClient);
    private url = environment.apiUrl + "/courses";

    findAll() {
        return this.http.get<PageResposne<Course>>(`${this.url}`)
    }

    create(request: CourseRequest) {
        return this.http.post(`${this.url}`, request)
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}`)
    }

    findById(id: string) {
        return this.http.get<Course>(`${this.url}/${id}`)
    }

}