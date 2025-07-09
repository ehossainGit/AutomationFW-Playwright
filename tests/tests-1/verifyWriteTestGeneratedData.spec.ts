import { test, expect } from '@playwright/test';
//import { writeFileSync } from "fs";
import * as fs from 'fs';
import { ReadWriteJson } from '../../helpers/ReadWriteJson';
import { DateUtil } from '../../helpers/Util';



const readWriteJson = new ReadWriteJson();
test('Verify save data to json file', async ({ page }) => {

  readWriteJson.updateJsonProperty("ueserEmail", new DateUtil(new Date()).getTimeStamp()+"@gmail.com");

});