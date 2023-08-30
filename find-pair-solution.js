const findThePairs = (numbers, sum) => {
    const pairsMatcher = new Map();
    const pairs = [];
    for (const value of numbers) {
        const searchItem = sum - value;
        if (pairsMatcher.get(searchItem)) {
            if (pairsMatcher.get(searchItem).length < 2) {
                pairs.push([searchItem, value]);
            }
            pairsMatcher.set(searchItem, [searchItem, value]);
        } else {
            pairsMatcher.set(value, [value]);
        }
    };
    return pairs;
}
const testCases = [
    {
        numbers: [1, 2, 3, 4, 5, 6, 7],
        sum: 8,
        expectedPairs: [[3, 5], [2, 6], [1, 7]],
    },
    {
        numbers: [2, 4, 6, 8, 10],
        sum: 12,
        expectedPairs: [[4, 8], [2, 10]],
    },
    {
        numbers: [3, 1, 4, 1, 5],
        sum: 6,
        expectedPairs: [[1, 5]],
    },
    {
        numbers: [2, 2, 3, 3, 4, 4],
        sum: 6,
        expectedPairs: [[3, 3], [2, 4]],
    },
    {
        numbers: [1, 2, 3, 4, 5],
        sum: 10,
        expectedPairs: [],
    },
    {
        numbers: [1, 9, 5, 0, 20, -4, 12, 16, 7],
        sum: 12,
        expectedPairs: [[0, 12], [-4, 16], [5, 7]]
    }
];

for (const testCase of testCases) {
    const { expectedPairs, numbers, sum } = testCase;
    const pairs = findThePairs(numbers, sum);
    console.assert(JSON.stringify(pairs) === JSON.stringify(expectedPairs), `Test failed for ${numbers} with sum ${sum}. Expected ${expectedPairs}, but got ${pairs}`)
}