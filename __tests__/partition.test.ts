import {qpartition} from '../app/qpartition'
import {verify_qpartition} from "../app/verify_qpartition";
import {randomInt} from "../app/util";

describe('trivial partition cases', () => {
    test('empty array partition', () => {
        const x: number[] = []
        const updatedPivotIndex = qpartition(x, 0, 0, 0)
        expect(x).toHaveLength(0)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, 0)).toEqual(true)
    })

    test('single element array partition', () => {
        const x: number[] = [10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(1)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, 0)).toEqual(true)
        expect(x[0]).toEqual(10)
    })
    test('two element array same values', () => {
        const x: number[] = [10, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(2)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, 0)).toEqual(true)
        expect(x[0]).toEqual(10)
        expect(x[1]).toEqual(10)
    })
    test('two element array ascending', () => {
        const x: number[] = [10, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(2)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, 0)).toEqual(true)
        expect(x[0]).toEqual(10)
        expect(x[1]).toEqual(11)
    })
    test('two element array descending', () => {
        const x: number[] = [11, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(2)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, 0)).toEqual(true)
        expect(x[0]).toEqual(10)
        expect(x[1]).toEqual(11)
    })
})

describe('non trivial paritioning', () => {
    test('3 elements 10 10 10 pivot 0', () => {
        const x: number[] = [10, 10, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 10 10 pivot 1', () => {
        const x: number[] = [10, 10, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 10 10 pivot 2', () => {
        const x: number[] = [10, 10, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 11 12 pivot 0', () => {
        const x: number[] = [10, 11, 12]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 11 12 pivot 1', () => {
        const x: number[] = [10, 11, 12]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 11 12 pivot 1', () => {
        const x: number[] = [10, 11, 12]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 12 11 pivot 0', () => {
        const x: number[] = [10, 12, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 12 11 pivot 1', () => {
        const x: number[] = [10, 12, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 10 12 11 pivot 2', () => {
        const x: number[] = [10, 12, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements ascending with step', () => {
        const x: number[] = [10, 12, 12]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 12 11 10 pivot 0', () => {
        const x: number[] = [12, 11, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 12 11 10 pivot 1', () => {
        const x: number[] = [12, 11, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('3 elements 12 11 10 pivot 2', () => {
        const x: number[] = [12, 11, 10]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(3)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 11, 10, 9 pivot 0', () => {
        const x: number[] = [12, 11, 10, 9]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(3)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 11, 10, 9 pivot 1', () => {
        const x: number[] = [12, 11, 10, 9]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 11, 10, 9 pivot 2', () => {
        const x: number[] = [12, 11, 10, 9]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 11, 10, 9 pivot 3', () => {
        const x: number[] = [12, 11, 10, 9]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 3)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 9, 10, 11 pivot 0', () => {
        const x: number[] = [12, 9, 10, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 0)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(3)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 9, 10, 11 pivot 1', () => {
        const x: number[] = [12, 9, 10, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(0)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 9, 10, 11 pivot 2', () => {
        const x: number[] = [12, 9, 10, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 2)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(1)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('4 elements 12, 9, 10, 11 pivot 3', () => {
        const x: number[] = [12, 9, 10, 11]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 3)
        expect(x).toHaveLength(4)
        expect(updatedPivotIndex).toEqual(2)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })

    test('lots of elements in random order', () => {
        const x1 = Array.from({length: 1000}, (_, key) => randomInt(0, 4999))
        const x2 = Array.from({length: 1000}, (_, key) => randomInt(5001, 10000))
        const x = [...x1, 5000, ...x2]
        const updatedPivotIndex = qpartition(x, 0, x.length - 1, 1000)
        expect(x).toHaveLength(2001)
        expect(updatedPivotIndex).toEqual(1000)
        expect(verify_qpartition(x, 0, x.length - 1, updatedPivotIndex)).toEqual(true)
    })


})