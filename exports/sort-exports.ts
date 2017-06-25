import { binarySort } from '../src/sort/binarySort';
import { mergeSort } from '../src/sort/mergeSort';
import { selectionSort } from '../src/sort/selectionSort';
import { shellSort } from '../src/sort/shellSort';
import { insertionSort } from "../src/sort/insertionSort";

export namespace Sort {

    _binarySort = binarySort;
    _mergeSort = mergeSort;
    _insertionSort = insertionSort;
    _selectionSort = selectionSort;
    _shellSort = shellSort;

    export declare let _binarySort;
    export declare let _mergeSort;
    export declare let _insertionSort;
    export declare let _selectionSort;
    export declare let _shellSort;

}