import { Pipe, PipeTransform } from "@angular/core";
import {Idetails } from "./shared/model/details";
@Pipe({
    name:"Details"
})

export class Detailspips implements PipeTransform {
    transform(val: any[], arg: any) {
        // console.log(val);
        console.log(arg);
        // console.log(val.title);
        return val.filter(item => item.title.toLowerCase().includes(arg.toLowerCase()));
    }
}