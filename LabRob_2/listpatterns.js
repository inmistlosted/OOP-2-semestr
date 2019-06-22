     /** Паттерн Abstract Factory **/
/** Створює списки різної спеціалізації **/
class ListFactory
{
    makeEmptyList()
    {
        return new List();
    }

    makeRandomList(number_of_elements)
    {
        let list = new List();
        for(let i = 0; i < number_of_elements; i++)
        {
            list.push_back(Math.floor(Math.random()*100));
        }
        return list;
    }

    makeFixedList()
    {
        let list = new List();
        list.push_back(10);
        list.push_back(20);
        list.push_back(30);
        list.push_back(40);
        list.push_back(50);
        return list;
    }

    makeOwnList(elems_arr)
    {
        let list = new List();
        for(let i = 0; i < elems_arr.length; i++)
        {
            list.push_back(elems_arr[i]);
        }
        return list;
    }
}


         /** Паттерн Decorator **/
/** Перетворює звичайний список в чергу **/
class Queue
{
    
    constructor(list)
    {
        this.list = list;
    }

    enqueue(element)
    {
        this.list.push_back(element);
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            return false;
        }
        return this.list.removeFrom(0);
    }

    front()
    {
        if(this.isEmpty())
        {
            return "No elements in Queue";
        }
        return this.list.findWithIndex(0);
    }

    rear() {
        return this.list.findWithIndex(this.list.size-1);
    }

    isEmpty()
    {
        return this.list.size == 0;
    }

    getSize(){
        return this.list.size;
    }

    showQueue()
    {
        let curr = this.list.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}


        /** Паттерн Decorator **/
/** Перетворює звичайний список в стек **/
class Stack
{
    constructor(list)
    {
        this.list = list;
    }

    push(element)
    {
        this.list.push_back(element);
    }

    pop()
    {
        if (this.list.size == 0)
            return "Underflow";
        return this.list.removeFrom(this.list.size-1);
    }

    peek()
    {
        return this.list.findWithIndex(this.list.size-1);
    }


    isEmpty()
    {
        return this.list.size == 0;
    }

    getSize(){
        return this.list.size;
    }

    showStack()
    {
        let curr = this.list.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}

                               /** Паттерн Decorator **/
/** Перетворює звичайний список в список для обчислення часу виконання операцій **/
class TimeMeasureDecorator
{
    constructor(list)
    {
        this.list = list;
    }

    push_back(element)
    {
        let time = performance.now();
        this.list.push_back(element);
        time = performance.now() - time;
        return time;
    }

    insertAt(element, index)
    {
        let time = performance.now();
        const bool = this.list.insertAt(element, index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    removeFrom(index)
    {
        let time = performance.now();
        const bool = this.list.removeFrom(index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }
    
    removeElement(element)
    {
        let time = performance.now();
        const bool = this.list.removeElement(element);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    indexOf(element)
    {
        let time = performance.now();
        const bool = this.list.indexOf(element);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return [bool,time];
    }

    findWithIndex(index)
    {
        let time = performance.now();
        const bool = this.list.findWithIndex(index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return [bool,time];
    }

    bubbleSort()
    {
        let time = performance.now();
        this.list = this.list.bubblesort(this.list);
        time = performance.now() - time;
        return time;
    }

    mergeSort()
    {
        let time = performance.now();
        const arrAdapter = new ArrayAdapter();
        let arr = arrAdapter.makeArray(this.list);
        arr = this.list.mergeSort(arr);
        this.list = arrAdapter.makeList(arr);
        time = performance.now() - time;
        return time;
    }

    quickSort()
    {
        let time = performance.now();
        const arrAdapter = new ArrayAdapter();
        let arr = arrAdapter.makeArray(this.list);
        arr = this.list.quickSort(arr, 0, arr.length-1);
        this.list = arrAdapter.makeList(arr);
        time = performance.now() - time;
        return time;
    }

    getSize(){
        return this.list.size;
    }

    showList()
    {
        let curr = this.list.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}

                          /** Паттерн Adapter **/
/** Перетворює звичайний список в масив для використання в інших операціях **/
class ArrayAdapter
{
    makeArray(list)
    {
        let arr = [];
        while(list.size !== 0)
        {
            arr.push(list.removeFrom(0));
        }
        return arr;
    }
    
    makeList(array)
    {
        const lf = new ListFactory();
        let list = lf.makeEmptyList();
        for(let i = 0; i < array.length; i++)
        {
            list.push_back(array[i]);
        }
        return list;
    }
}

                                       /** Паттерн Strategy **/
                    /** Стратегія для найбільш оптимального сортування списку **/
/** Якщо розмір списку < 5, то використовуєм BubbleSort, якщо > 5 i < 15 - MergeSort, якщо > 15 - QuickSort **/
class SortingStrategy
{
    constructor()
    {
        this.usedMethod;
    }
    
    sort(list)
    {
        if(list.size <= 5)
        {
            this.usedMethod = 'BubbleSort';
            return list.bubblesort(list);
        }
        else if(list.size > 5 && list.size <= 15)
        {
            this.usedMethod = 'MergeSort';
             const arrAdapter = new ArrayAdapter();
             let arr = arrAdapter.makeArray(list);
             arr = list.mergeSort(arr);
             return arrAdapter.makeList(arr);
        }
        else
        {
            this.usedMethod = 'QuickSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = list.quickSort(arr, 0, arr.length-1);
            return arrAdapter.makeList(arr);
        }
    }
}

     /** Паттерн Iterator **/
/** Потрібний для обходу списку **/
class ListIterator
{

    showList(list)
    {
        let curr = list.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }

    IndexOf(element, list)
    {
        let count = 0;
        let current = list.head;

        while (current != null) {
            if (current.element === element)
            {
                return count;
            }
            count++;
            current = current.next;
        }

        return false;
    }

    findWithIndex(index, list)
    {
        let count = 0;
        let current = list.head;

        while (current != null) {
            if (index === count)
            {
                return current.element;
            }
            count++;
            current = current.next;
        }

        return false;
    }

    SizeOfList(list)
    {
        return list.size;
    }
}
