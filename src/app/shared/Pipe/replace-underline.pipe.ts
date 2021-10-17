import { Pipe, PipeTransform } from "@angular/core";
import { isNullOrUndefined } from "util";

@Pipe({
  name: "replaceUnderline",
})
export class ReplaceUnderlinePipe implements PipeTransform {
  transform(value: any): any {
    typeof value === "string" && value.length === 0 ? (value = "_") : value;
    return value || !isNullOrUndefined(value) ? value : "_";
  }
}
