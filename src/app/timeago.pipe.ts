import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
  name: "timeago"
})
export class TimeagoPipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    let timeAgo = moment(value).fromNow();
    return timeAgo;
  }
}
