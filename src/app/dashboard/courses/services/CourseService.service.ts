import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { Course } from "../models/Course";
import { PageResposne } from "../../shared/models/PageResponse.dto";

@Service()
export class CourseService {

    private http = inject(HttpClient);
    private url = environment.apiUrl + "/courses";


    findAll() {
        return this.http.get<PageResposne<Course>>(`${this.url}`)
    }

}