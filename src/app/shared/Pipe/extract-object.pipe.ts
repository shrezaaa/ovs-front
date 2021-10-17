import { Pipe, PipeTransform } from "@angular/core";
import { isNullOrUndefined } from "util";

@Pipe({
  name: "extractObject",
})
export class ExtractObjectPipe implements PipeTransform {
  transform(value: any, key?: string) {
    return this.fillDynamicObject(value, key);
  }

  fillDynamicObject(object, key: string) {
    let obj = JSON.parse(object[key]);
    if (!isNullOrUndefined(obj)) {
      Object.keys(obj).forEach((element) => {
        let tempObj = {};
        tempObj[element] = obj[element];
        Object.assign(object, tempObj);
      });
    }
    return object;
  }
}
