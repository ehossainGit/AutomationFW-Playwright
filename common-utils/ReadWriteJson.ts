/** Reusable utilities: TBD */

//ref: https://date-fns.org/docs/Getting-Started#installation
import { format, compareAsc } from "date-fns";
import * as fs from 'fs';
import * as path from 'path';


export class ReadWriteJson {
    jsonFilePath: string = path.resolve(__dirname, "../data/dataInKeyValPairForSave.json");
    testData: object;
    constructor() {
        this.testData = JSON.parse(JSON.stringify(require(this.jsonFilePath)));
    }
    
    getJsonObj(): object {

       return this.testData;
    
    }
    // getJsonProperty(prop: string): string {

    //    return this.testData.prop;
    
    // }

    
    // updateJsonProperty(prop: string, value:string) {

    //     this.testData[prop]=value;
    //     const jsonString = JSON.stringify(this.testData, null, 2);
    //     fs.writeFileSync(this.jsonFilePath, jsonString, {
    //         flag: "w"
    //     });
    //  }
    
}
