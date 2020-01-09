import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:"usercontent"
})

export class Userpipe implements PipeTransform {
    transform(val,arg) {
        if (arg === undefined) { return val; }
        if (val.length > arg) {
            return val.substring(0, arg) + "....";
        }
    };
}