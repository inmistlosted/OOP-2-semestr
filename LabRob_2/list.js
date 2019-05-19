
class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}

class List {
    constructor(list)
    {
        this.head = list || null;
        this.size = 0;
    }

    push_back(element)
    {
        let node = new Node(element);

        let current;

        if (this.head == null)
        {
            this.head = node;
        }
        else
            {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index)
    {
        if (index < 0 || index > this.size)
        {
            return false;
        }
        else
            {

            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            if (index == 0)
            {
                node.next = this.head;
                this.head = node;
            }
            else
                {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index)
    {
        if (index < 0 || index >= this.size)
        {
            return false;
        }
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0)
            {
                this.head = curr.next;
            }
            else
                {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }

    removeElement(element)
    {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    indexOf(element)
    {
        let count = 0;
        let current = this.head;

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

    findWithIndex(index)
    {
        let count = 0;
        let current = this.head;

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

    getSize()
    {
        return this.size;
    }

    isEmpty()
    {
        return this.size == 0;
    }

    printList()
    {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    swap(a,b)
    {
        let temp = a.element;
        a.element = b.element;
        b.element = temp;
    }

    bubblesort(list)
    {
        if(list.head === null)
        {
            return -1;
        }

        let i;
        do {

            i = 0;

            let curr1 = list.head;
            let curr2 = null;

            while(curr1.next !== curr2)
            {
                if(curr1.element > curr1.next.element)
                {
                    this.swap(curr1, curr1.next);
                    i = 1;
                }
                curr1 = curr1.next;
            }
            curr2 = curr1;
        }while (i);

        return list;
    }

    mergeSort(arr)
    {
        let len = arr.length;
        if(len <2)
        {
            return arr;
        }
        let mid = Math.floor(len/2),
            left = arr.slice(0,mid),
            right =arr.slice(mid);

        return this.merge(this.mergeSort(left),this.mergeSort(right));
    }

    merge(left, right)
    {
        let result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen)
        {
            if(left[l] < right[r])
            {
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }

        return result.concat(left.slice(l)).concat(right.slice(r));
    }

    quickSort(arr, left, right)
    {
        let len = arr.length,
            pivot,
            partitionIndex;

        if(left < right)
        {
            pivot = right;
            partitionIndex = this.partition(arr, pivot, left, right);

            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    }

    partition(arr, pivot, left, right)
    {
        let pivotValue = arr[pivot],
            partitionIndex = left;

        for(var i = left; i < right; i++)
        {
            if(arr[i] < pivotValue)
            {
                this.swap_arr(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap_arr(arr, right, partitionIndex);
        return partitionIndex;
    }

    swap_arr(arr, i, j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

