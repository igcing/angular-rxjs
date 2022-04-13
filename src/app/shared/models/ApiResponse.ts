import { ApiPokeRef } from '@apps/shared/models/ApiPokeRef';

export interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: ApiPokeRef[];
}
