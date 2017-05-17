# Goal 159: Core Algorithms [Sorting, Searching, Graphing, Geometry]

## Installation and Setup
```
To run tests: $npm i && npm test

To run eslint: $npm run lint
```

## Specifications

 - [x] Artifact produced is a fork of the [core-algorithms][core-algorithms] repo.
 - [x] Can run all tests with npm test.
 - [x] binarySearch() algorithm is implemented according to the description in algorithms.md.
 - [x] Tests for binarySearch() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
 - [x] bubbleSort() algorithm is implemented according to the description in algorithms.md.
 - [x] Tests for bubbleSort() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
 - [ ] mergeSort() algorithm is implemented according to the description in algorithms.md.
 - [ ] Tests for mergeSort() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
 - [ ] closestPair() algorithm is implemented according to the description in algorithms.md.
 - [ ] Tests for closestPair() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
 - [ ] isConnectedGraph() algorithm is implemented according to the description in algorithms.md.
 - [ ] Tests for isConnectedGraph() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
 - [x] Repository includes a README file with basic installation and setup instructions.
 - [x] All package dependencies are properly declared in package.json.
 - [x] All major features are added via pull requests with a clear description and concise commit messages.
 - [x] Code uses a linter and there are no linting errors.
 - [x] Variables, functions, files, etc. have appropriate and meaningful names.
 - [x] Functions are small and serve a single purpose.
 - [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].
Stretch

Pick a different programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java…) and write tests & implementations for each.

 Can run all non-JavaScript tests with a single command.
 For each algorithm identified above, there is a test file with multiple unit tests for each algorithm in a language other than JavaScript.
 For each algorithm identified above, there is an implementation file with a correct implementation of the algorithm in a language other than JavaScript.

## Sorting and Searching

#### binarySearch

Search for a number within an array using the **binary search** algorithm.
**[Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm)** looks for an item in a list by looking at a list's center, then looking at the center of the left or right half, continually dividing the search space in half until it finds what it's looking for.

```javascript
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
binarySearch(numbers, 45)
// => 8
```

#### bubbleSort

Sort an array of numbers using the **[bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)** algorithm.

```javascript
bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### mergeSort

Sort an array of numbers using the **[merge sort](https://en.wikipedia.org/wiki/Merge_sort)** algorithm.

```javascript
mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


## Graphing and Geometry

#### closestPair

Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem)

```javascript
const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]
closestPair(points)
// => { pair: [[-1, 0], [-2, 0]], distance: 1 }
```

#### isConnectedGraph

Check if a graph is connected or disconnected. Return `true` or `false`.

A graph is connected when there is a path between every pair of vertices.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

```javascript
const graphA = {
  'a': ['b', 'c'],
  'b': ['a', 'd'],
  'c': ['a', 'd'],
  'd': ['b', 'c'],
}
isConnectedGraph(graphA)
// => true

const graphB = {
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['c'],
}
isConnectedGraph(graphB)
// => false
```
