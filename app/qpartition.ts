import assert from "assert";

export function qpartition(x: number[], startIndex: number, endIndex: number, pivotIndex: number = 0): number {
    function swap(x: number[], firstIndex: number, secondIndex: number, pivotIndex: number): number {
        const tmp = x[firstIndex]
        x[firstIndex] = x[secondIndex]
        x[secondIndex] = tmp
        if (pivotIndex == firstIndex) {
            return secondIndex
        } else if (pivotIndex == secondIndex) {
            return firstIndex
        } else {
            return pivotIndex
        }
    }

    function orderAscending(x: number[], firstIndex: number, secondIndex: number, pivotIndex: number): number {
        assert(firstIndex <= secondIndex)
        if (x[firstIndex] > x[secondIndex]) {
            return swap(x, firstIndex, secondIndex, pivotIndex)
        }
        return pivotIndex
    }

    if (x?.length > 0) {
        assert(startIndex < x.length)
        assert(endIndex < x.length)
        assert(startIndex <= endIndex)
        assert(startIndex <= pivotIndex && pivotIndex <= endIndex)
        let currentPivotIndex = pivotIndex
        const length = endIndex - startIndex + 1
        if (length == 0 || length == 1) {
            return pivotIndex
        } else if (length == 2) {
            currentPivotIndex = orderAscending(x, startIndex, startIndex+1, currentPivotIndex)
            return currentPivotIndex
        } else {
            let done = false
            let rightOffset = 1
            let leftOffset = 1
            while (!done) {
                // process one unprocessed element from right and one unprocessed from left
                let lIndex = currentPivotIndex - leftOffset
                let rIndex = currentPivotIndex + rightOffset
                if (lIndex < startIndex && rIndex > endIndex) {
                    done = true
                } else {
                    if (rIndex <= endIndex) {
                        // element to process on right
                        if (lIndex >= startIndex) {
                            // element to process on left
                            // therefore elements to process on both sides
                            // l p r
                            const l = x[lIndex]
                            const r = x[rIndex]
                            const p = x[currentPivotIndex]
                            if (rightOffset == 1 && leftOffset == 1) {
                                // simplest case l p r are adjacent in that order
                                if (l > p && p < r) {
                                    // just swap l and p and move currentPivotIndex to lIndex
                                    x[lIndex] = p
                                    x[currentPivotIndex] = l
                                    currentPivotIndex = lIndex
                                    rightOffset = 3
                                    leftOffset = 1
                                } else if (l < p && p < r) {
                                    // nothing to change
                                    rightOffset = 2
                                    leftOffset = 2
                                } else if (l < p && p > r) {
                                    // just swap p and r and move currentPivotIndex to rIndex
                                    x[rIndex] = p
                                    x[currentPivotIndex] = r
                                    currentPivotIndex = rIndex
                                    rightOffset = 1
                                    leftOffset = 3
                                } else if (l > p && p > r) {
                                    // just swap l and r and leave p and currentPivotIndex as is
                                    x[rIndex] = l
                                    x[lIndex] = r
                                    rightOffset = 2
                                    leftOffset = 2
                                } else {
                                    rightOffset++
                                    leftOffset++
                                }
                            } else {
                                // at least one processed adjacent pivot on each side
                                const pl = x[currentPivotIndex-1]
                                const p = x[currentPivotIndex]
                                const pr = x[currentPivotIndex+1]
                                const l = x[lIndex]
                                const r = x[rIndex]
                                if (l > p && p < r) {
                                    x[lIndex] = pl
                                    x[currentPivotIndex-1] = p
                                    x[currentPivotIndex] = l
                                    currentPivotIndex = currentPivotIndex - 1
                                    leftOffset = currentPivotIndex-1-lIndex+1
                                    rightOffset = rIndex - (currentPivotIndex-1) + 1
                                } else if (l < p && p < r) {
                                    // nothing to do
                                    leftOffset = currentPivotIndex - lIndex + 1
                                    rightOffset = rIndex - currentPivotIndex + 1
                                } else if (l > p && p > r) {
                                    x[lIndex] = r
                                    x[rIndex] = l
                                    leftOffset = currentPivotIndex - lIndex + 1
                                    rightOffset = rIndex - currentPivotIndex + 1
                                } else if (l < p && p > r) {
                                    x[rIndex] = pr
                                    x[currentPivotIndex+1] = p
                                    x[currentPivotIndex] = r
                                    currentPivotIndex = currentPivotIndex + 1
                                    rightOffset = rIndex - (currentPivotIndex+1) + 1
                                    leftOffset = (currentPivotIndex+1) - lIndex + 1
                                }
                            }
                        } else {
                            // nothing to process on left, just on the right
                            // p r
                            const p = x[currentPivotIndex]
                            const r = x[rIndex]
                            if (p > r) {
                                // just swap p and r and move currentPivotIndex to rIndex
                                if (rightOffset == 1) {
                                    x[rIndex] = p
                                    x[currentPivotIndex] = r
                                    currentPivotIndex = rIndex
                                } else {
                                    const pr = x[currentPivotIndex+1]
                                    x[rIndex] = pr
                                    x[currentPivotIndex+1] = p
                                    x[currentPivotIndex] = r
                                    currentPivotIndex = currentPivotIndex + 1
                                }
                                rightOffset = 1
                            } else {
                                rightOffset++
                            }
                            leftOffset = currentPivotIndex+1
                        }
                    } else {
                        // nothing to process on the right
                        if (lIndex >= startIndex) {
                            // element to process on left
                            // l p
                            const l = x[lIndex]
                            const p = x[currentPivotIndex]
                            if (l > p) {
                                // just swap l and p and move currentPivotIndex to lIndex
                                if (leftOffset == 1) {
                                    x[lIndex] = p
                                    x[currentPivotIndex] = l
                                    currentPivotIndex = lIndex
                                    leftOffset = 1
                                } else {
                                    const pl = x[currentPivotIndex-1]
                                    x[lIndex] = pl
                                    x[currentPivotIndex-1] = p
                                    x[currentPivotIndex] = l
                                    currentPivotIndex = currentPivotIndex - 1
                                }
                                leftOffset = 1
                            } else {
                                leftOffset++
                            }
                            rightOffset = currentPivotIndex + 1
                        } else {
                            // nothing to process on right and left, done
                            done = true
                        }
                    }
                }
            }
            return currentPivotIndex
        }
    }
    return pivotIndex
}