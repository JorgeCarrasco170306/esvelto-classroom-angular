import { inject, Service } from '@angular/core';

@Service()
export class CommonService {
    private location = inject(Location);
}
