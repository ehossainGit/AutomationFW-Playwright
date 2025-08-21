export class NumberDemo {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
    static revverserNumArray(arr: number[]): number[] {
        let revArr: number[] = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            revArr.push(arr[i]);
        }
        return revArr;
    }
    static sortNumArray(arr: number[]): number[] {
        return arr.sort((a, b) => a - b);
    }
    static sortNumArrayWithoutSort(arr: number[]): number[] {
        let temp: number;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}   