/** Reusable utilities: TBD */

//ref: https://date-fns.org/docs/Getting-Started#installation
import { format, compareAsc } from "date-fns";

export class DateUtil {
    readonly date: Date;

    constructor(date: Date) {
        this.date = date;
    }
    
    getYYYY() {
       return format(this.date, "yyyy");
    
    }

    getToday() {
      const today: string = format(this.date, "MM/dd/yyyy");
      return today;
   }

    getTimeStamp() {
        const year: string = format(this.date, "yyyy");
        const month: string = format(this.date, "MM");
        const day: string = format(this.date, "dd");
        const hours: string = format(this.date, "HH");
        const minutes: string = format(this.date, "mm");
        const seconds: string = format(this.date, "ss");
        const milliseconds: string = format(this.date, "SSS");
 
        return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`
     }


    
}
