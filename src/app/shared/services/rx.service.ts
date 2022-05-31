import {RxInterface} from "@apps/shared/services/rx.interface";
import {map, MonoTypeOperatorFunction, Observable, race, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class RxService implements RxInterface {
    opt1: MonoTypeOperatorFunction<any> = tap(console.log);
    opt2: MonoTypeOperatorFunction<any> = map((val) => val.results);

    race(input: Observable<any>[]): Observable<any> {
        return race(input)
            .pipe(
                this.opt1,
                this.opt2,
            );
    }
}
