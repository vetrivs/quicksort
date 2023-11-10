import assert from "assert";

export function verify_qpartition(x: number[], startIndex: number, endIndex: number, pivot: number): boolean {
    if (x?.length > 0) {
        assert(startIndex <= x.length)
        assert(endIndex <= x.length)
        assert(startIndex <= endIndex)
        assert(startIndex <= pivot && pivot <= endIndex)
        const length = endIndex - startIndex + 1
        for(let i = 0; i < length ?? 0; i++) {
            if (i <= pivot) {
                if (x[i] > x[pivot]) {
                    return false
                }
            } else {
                if (x[i] < x[pivot]) {
                    return false
                }
            }
        }
    }
    return true
}