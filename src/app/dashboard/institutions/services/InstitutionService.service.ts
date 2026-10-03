import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Institution, InstitutionRequest } from '../models/Institution.dto';
import { PageResposne } from '../../shared/models/PageResponse.dto';

@Service()
export class InstitutionService {

    private http = inject(HttpClient);
    private url = environment.apiUrl;

    findAll(page: number, size: number, name?: string) {
        const params: Record<string, string | number> = {
            page,
            size
        };

        if (name?.trim()) {
            params['name'] = name.trim();
        }

        return this.http.get<PageResposne<Institution>>(`${this.url}/institutions`,
            {
                params
            }
        )
    }

    add(req: InstitutionRequest){
        return this.http.post<Institution>(`${this.url}/institutions`, req)
    }

}
