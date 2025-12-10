
import {test, expect} from '@playwright/test';


test('Find duplicate characters in a string', async () => {
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    const str = 'Hello World';
    const mapDuplicateCount = new Map<string, number>();
    const newSet = new Set<string>();
    for(const c of str){
        if(mapDuplicateCount.has(c)){
            mapDuplicateCount.set(c, (mapDuplicateCount.get(c) ?? 0) + 1);
            
        }else{
            mapDuplicateCount.set(c, 1);
            newSet.add(c);
        }

    }
    // console.log(newSet);
    // console.log(mapDuplicateCount);
    // const dup = Array.from(mapDuplicateCount).filter(([key, value]) => value > 1);
    // console.log(dup);
    // console.log('Duplicate characters: ', dup.map(([key, _value]) => key));
    // console.log('Count of duplicate characters: ', dup.length);
    // console.log('Count of unique characters: ', mapDuplicateCount.size);
    // console.log('Total characters in string: ', str.length);
    // console.log('Unique characters are: ', Array.from(mapDuplicateCount).filter(([key, value]) => value === 1).map(([key, _value]) => key));
    console.log(mapDuplicateCount.keys());
    console.log(mapDuplicateCount.values());


});

