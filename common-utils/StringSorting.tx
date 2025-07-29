export class StringSorting{

    public static demoStringSorting(): void {
        const strings: string[] = ["banana", "apple", "cherry", "date"];
        console.log("Original array:", strings);

        const sortedStrings: string[] = [...strings].sort();
        console.log("Sorted array:", sortedStrings);
    }

    public static manualStringSorting(strings: string[]): string[] {
        const arr = [...strings];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}