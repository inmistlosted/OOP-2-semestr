describe("ListFactory",() => {
    describe("Make empty list",() => {
        it("a size of empty list = 0", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeEmptyList();
            assert.equal(list.getSize(),0);
        });

        it("new list is empty: TRUE", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeEmptyList();
            assert.isTrue(list.isEmpty());
        });
    });

    describe("Make List with random elements", () => {
        it("a size of list with 7 random elements = 7", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeRandomList(7);
            assert.equal(list.getSize(),7);
        });

        it("a list made of 3 random elements is empty: FALSE", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeRandomList(3);
            assert.isFalse(list.isEmpty());
        });

        it("a size of list with 0 random elements = 0", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeRandomList(0);
            assert.equal(list.getSize(),0);
        });
    });

    describe("Make List made of fixed elements", () => {
        it("size of this list = 5", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeFixedList();
            assert.equal(list.getSize(),5);
        });

        it("size of this list = 3 : FALSE", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeFixedList();
            assert.isFalse(list.getSize() === 3);
        });

        it("element with index 2 = 30", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeFixedList();
            assert.equal(list.findWithIndex(2),30);
        });
    });

    describe("Make Own List", () => {
        it("size of this list, made of 34,65,21,46,76,67 elements = 6", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([34,65,21,46,76,67]);
            assert.equal(list.getSize(),6);
        });

        it(`index of element 12 in list made of elements 67, 12, 53 is 1`, () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([67,12,53]);
            assert.equal(list.indexOf(12), 1);
        });

        it("list made of element 389 is empty: FALSE", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeFixedList();
            assert.isFalse(list.isEmpty());
        });
    });
});

describe("Decorators",() => {
    describe('Queue', () => {
        describe("Enqueue an element",() => {
            it("23 was last added to queue, the last element of queue now is 23", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new Queue(list);
                list.enqueue(23);
                assert.equal(list.rear(), 23);
            });

            it("109 was last added to queue, the last element of queue now is 109", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(2);
                list = new Queue(list);
                list.enqueue(109);
                assert.equal(list.rear(), 109);
            });
        });

        describe("Dequeue an element",() => {
            it("queue consists of 23,45,65,98, if we call dequeue, first element will be 45", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([23,45,65,98]);
                list = new Queue(list);
                list.dequeue();
                assert.equal(list.front(), 45);
            });

            it("queue consists of 23,45,65,98, if we call dequeue, received element will be 23", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([23,45,65,98]);
                list = new Queue(list);
                assert.equal(list.dequeue(), 23);
            });
        });

        describe("Front element",() => {
            it("front element of queue, which consists of 87,432,851,34,69 is 87", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Queue(list);
                assert.equal(list.front(), 87);
            });

            it("front element of queue, which consists of 242,75,2342 is 242", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([242,75,2342]);
                list = new Queue(list);
                assert.equal(list.front(), 242);
            });
        });

        describe("Rear element",() => {
            it("rear element of queue, which consists of 87,432,851,34,69 is 69", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Queue(list);
                assert.equal(list.rear(), 69);
            });

            it("rear element of queue, which consists of 242,75,2342 is 2342", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([242,75,2342]);
                list = new Queue(list);
                assert.equal(list.rear(), 2342);
            });
        });

        describe("Emptiness of Queue",() => {
            it("queue, which consists of 87,432,851,34,69 is empty: FALSE", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Queue(list);
                assert.isFalse(list.isEmpty());
            });

            it("queue, which consists of 0 elements is empty: TRUE", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeEmptyList();
                list = new Queue(list);
                assert.isTrue(list.isEmpty());
            });
        });

        describe("Size of Queue",() => {
            it("size of queue, which consists of 87,432,851,34,69 is 5", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Queue(list);
                assert.equal(list.getSize(), 5);
            });

            it("size of queue, which consists of 242,75,2342 is 3", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([242,75,2342]);
                list = new Queue(list);
                assert.equal(list.getSize(), 3);
            });
        });
    });

    describe('Stack', () => {
        describe("Push an element",() => {
            it("23 was last added to stack, the last element of stack now is 23", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new Stack(list);
                list.push(23);
                assert.equal(list.peek(), 23);
            });

            it("109 was last added to stack, the last element of stack now is 109", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(2);
                list = new Stack(list);
                list.push(109);
                assert.equal(list.peek(), 109);
            });
        });

        describe("Pop an element",() => {
            it("stack consists of 23,45,65,98, if we call pop, the last element will be 65", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([23,45,65,98]);
                list = new Stack(list);
                list.pop();
                assert.equal(list.peek(), 65);
            });

            it("satck consists of 23,45,65,98, if we call pop, received element will be 98", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([23,45,65,98]);
                list = new Stack(list);
                assert.equal(list.pop(), 98);
            });
        });

        describe("Peek(the last) element",() => {
            it("peek element of stack, which consists of 87,432,851,34,69 is 69", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Stack(list);
                assert.equal(list.peek(), 69);
            });

            it("peek element of stack, which consists of 242,75,2342 is 2342", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([242,75,2342]);
                list = new Stack(list);
                assert.equal(list.peek(), 2342);
            });
        });

        describe("Emptiness of Queue",() => {
            it("queue, which consists of 0 elements is empty: TRUE", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeEmptyList();
                list = new Stack(list);
                assert.isTrue(list.isEmpty());
            });

            it("queue, which consists of 256,98 is empty: FALSE", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69]);
                list = new Stack(list);
                assert.isFalse(list.isEmpty());
            });
        });

        describe("Size of Queue",() => {
            it("size of queue, which consists of 87,432,851,34,69,234,98,1,23  is 9", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([87,432,851,34,69,234,98,1,23]);
                list = new Stack(list);
                assert.equal(list.getSize(), 9);
            });

            it("size of queue, which consists of 242,75,2342,12,34,9 is 6", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeOwnList([242,75,2342,12,34,9]);
                list = new Stack(list);
                assert.equal(list.getSize(), 6);
            });
        });
    });

    describe('Time Measurement', () => {
        describe("Time of pushing back an element",() => {
            it("calculates how much time push_back(12) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.push_back(12);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time push_back(1236) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.push_back(1236);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of inserting an element at needed position",() => {
            it("calculates how much time insertAt(3, 1) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.insertAt(3, 1);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time insertAt(876, 4) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.insertAt(876, 4);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of removing an element from needed position",() => {
            it("calculates how much time removeFrom(0) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.removeFrom(0);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time removeFrom(2) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.removeFrom(2);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of removing an element",() => {
            it("calculates how much time removeElement(20) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeFixedList();
                list = new TimeMeasureDecorator(list);
                let tmr = list.removeElement(20);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time removeElement(50) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeFixedList();
                list = new TimeMeasureDecorator(list);
                let tmr = list.removeElement(50);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of searching index of an element",() => {
            it("calculates how much time indexOf(30) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeFixedList();
                list = new TimeMeasureDecorator(list);
                let tmr = list.indexOf(30);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time indexOf(10) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeFixedList();
                list = new TimeMeasureDecorator(list);
                let tmr = list.indexOf(10);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of searching an element knowing its index",() => {
            it("calculates how much time findWithIndex(3) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(5);
                list = new TimeMeasureDecorator(list);
                let tmr = list.findWithIndex(3);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time findWithIndex(8) is spending", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(9);
                list = new TimeMeasureDecorator(list);
                let tmr = list.findWithIndex(8);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of sorting a list using bubble sort",() => {
            it("calculates how much time bubblesort() is spending in list of 4 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(4);
                list = new TimeMeasureDecorator(list);
                let tmr = list.bubbleSort();
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time bubblesort() is spending in list of 11 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(11);
                list = new TimeMeasureDecorator(list);
                let tmr = list.bubbleSort();
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of sorting a list using merge sort",() => {
            it("calculates how much time mergeSort() is spending in list of 24 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(24);
                list = new TimeMeasureDecorator(list);
                let tmr = list.mergeSort();
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time mergeSort() is spending in list of 3 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(3);
                list = new TimeMeasureDecorator(list);
                let tmr = list.mergeSort();
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of sorting a list using quick sort",() => {
            it("calculates how much time quickSort() is spending in list of 10 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(10);
                list = new TimeMeasureDecorator(list);
                let tmr = list.quickSort();
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time quickSort() is spending in list of 61 elements", () => {
                const listFactory = new ListFactory();
                let list = listFactory.makeRandomList(61);
                list = new TimeMeasureDecorator(list);
                let tmr = list.quickSort();
                assert.isTrue(tmr != undefined);
            });
        });
    });
});

describe("ArrayAdapter",() => {
    describe("Transforms a list into an array",() => {
        it("a list of 5 elements after using makeArray(list) becomes an array", () => {
            const listFactory = new ListFactory();
            const arrAdapter = new ArrayAdapter();
            let list = listFactory.makeRandomList(5);
            list = arrAdapter.makeArray(list);
            assert.isTrue(Array.isArray(list));
        });

        it("a list of 9 elements after using makeArray(list) becomes an array", () => {
            const listFactory = new ListFactory();
            const arrAdapter = new ArrayAdapter();
            let list = listFactory.makeOwnList([12,42,52,633,25,452,342,4,2]);
            list = arrAdapter.makeArray(list);
            assert.isTrue(Array.isArray(list));
        });
    });

    describe("Transforms an array into a list",() => {
        it("an array of 3 elements after using makeList(array) becomes a list", () => {
            const arrAdapter = new ArrayAdapter();
            let array = [34,65,24];
            array = arrAdapter.makeList(array);
            assert.isFalse(array.isEmpty());
        });

        it("an array of 7 elements after using makeList(array) becomes a list", () => {
            const arrAdapter = new ArrayAdapter();
            let array = [34,65,24,96,2,13,45];
            array = arrAdapter.makeList(array);
            assert.isFalse(array.isEmpty());
        });
    });
});

describe("SortingStrategy",() => {
    describe("Sorts a list depending on the size of this list",() => {
        it("a list of 4 elements is sorted using bubble sort", () => {
            const listFactory = new ListFactory();
            const sortStrat = new SortingStrategy();
            let list = listFactory.makeRandomList(4);
            list = sortStrat.sort(list);
            assert.isTrue(sortStrat.usedMethod === 'BubbleSort');
        });

        it("a list of 11 elements is sorted using merge sort", () => {
            const listFactory = new ListFactory();
            const sortStrat = new SortingStrategy();
            let list = listFactory.makeRandomList(11);
            list = sortStrat.sort(list);
            assert.isTrue(sortStrat.usedMethod === 'MergeSort');
        });

        it("a list of 23 elements is sorted using quick sort", () => {
            const listFactory = new ListFactory();
            const sortStrat = new SortingStrategy();
            let list = listFactory.makeRandomList(23);
            list = sortStrat.sort(list);
            assert.isTrue(sortStrat.usedMethod === 'QuickSort');
        });
    });
});

describe("ListIterator",() => {
    describe("Returns a string of all elements in list",() => {
        it("result of showList() in list [12,3,45] must be string '12 3 45' ", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([12,3,45]);
            const listIter = new ListIterator();
            assert.equal(listIter.showList(list),'12 3 45 ');
        });

        it("result of showList() in list [43,367,98,23,19,87,6,23,71] must be string '43 367 98 23 19 87 6 23 71' ", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([43,367,98,23,19,87,6,23,71]);
            const listIter = new ListIterator();
            assert.equal(listIter.showList(list),'43 367 98 23 19 87 6 23 71 ');
        });
    });

    describe("Searches for an index of element", () => {
        it("Index of element 12 in list 34,56,12,78 = 2", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(12,list),2);
        });

        it("Index of element 3 in list 3,65,24,12,98,34,54 = 0", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(3,list),0);
        });

        it("Index of element 417 in list 345,241,654,243,2,62,54,2545,252,87,417 = 10", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(417,list),10);
        });
    });

    describe("Searches for an element using its index", () => {
        it("element with index 1 in list 34,56,12,78 = 56", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(1,list),56);
        });

        it("element with index 5 in list 3,65,24,12,98,34,54 = 34", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(5,list),34);
        });

        it("element with index 8 in list 345,241,654,243,2,62,54,2545,252,87,417 = 252", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(8,list),252);
        });
    });

    describe("Calculates size of a list", () => {
        it("size of list made of elements 34,56,12,78 = 4", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),4);
        });

        it("size of list made of elements 3,65,24,12,98,34,54 = 7", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),7);
        });

        it("size of list made of elements 345,241,654,243,2,62,54,2545,252,87,417 = 11", () => {
            const listFactory = new ListFactory();
            let list = listFactory.makeOwnList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),11);
        });
    });
});