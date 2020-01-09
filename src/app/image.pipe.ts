import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"imgagepipe"
})

export class Imagepipe implements PipeTransform {
    transform(val,arg,httpoption=false) {
        let image = "";
        if (val) {
            image = val; 
        } else {
            image = arg
        }
        if (httpoption) {
            if (image.indexOf("https") == -1) {
                image = image.replace("http", "https");
             }
        }
        return image;
    }
}