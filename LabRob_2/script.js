document.getElementById('start').onclick = function () {
    const choose = document.getElementById('choose');
    choose.style.display = 'block';
}

function show_list(list)
{
    const showList = document.getElementById('showList');
    const showSize = document.getElementById('showSize');
    const listIterator = new ListIterator();

    showSize.innerHTML = `Size: ${listIterator.SizeOfList(list)}`;
    if(listIterator.showList(list) === "")
    {
        showList.innerHTML = '*EMPTY*';
    }
    else
    {
        showList.innerHTML = listIterator.showList(list);
    }
}

function show_queue(queue)
{

    const showQueue = document.getElementById('showQueue');
    const showQueueSize = document.getElementById('showQueueSize');
    showQueueSize.innerHTML = `Size: ${queue.getSize()}`;
    if(queue.showQueue() === "")
    {
        showQueue.innerHTML = '*EMPTY*';
    }
    else
    {
        showQueue.innerHTML = queue.showQueue();
    }
}

function show_stack(stack)
{

    const showStack = document.getElementById('showStack');
    const showStackSize = document.getElementById('showStackSize');
    showStackSize.innerHTML = `Size: ${stack.getSize()}`;
    if(stack.showStack() === "")
    {
        showStack.innerHTML = '*EMPTY*';
    }
    else
    {
        showStack.innerHTML = stack.showStack();
    }
}

function show_timeList(timeList)
{
    const showTimeList = document.getElementById('showTimeList');
    const showTimeSize = document.getElementById('showTimeSize');

    showTimeSize.innerHTML = `Size: ${timeList.getSize()}`;
    if(timeList.showList() === "")
    {
        showTimeList.innerHTML = '*EMPTY*';
    }
    else
    {
        showTimeList.innerHTML = timeList.showList();
    }
}

function list_push(list)
{
    let element = prompt('Enter element to push back into list:');
    if(element === null || element === "")
    {
        list.push_back(0);
    }
    else
    {
        list.push_back(+element);
    }
    show_list(list);
}

function list_insertAt(list)
{
    const popup = document.getElementById('main_popup');
    const element = document.getElementById('elmnt');
    const index = document.getElementById('index');


    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        popup.style.display = 'block';
        document.getElementById('btn_popup').onclick = function () {
            if(element.value === "" || index.value === "")
            {
                element.value = 0;
                index.value = 0;
            }

            if(list.insertAt(+element.value,+index.value) === false)
            {
                alert("Index can't be bigger than size of list");
            }

            popup.style.display = 'none';
            show_list(list);
        }
    }
}

function list_removeIndex(list)
{
    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let position = prompt('Enter index of element to be deleted from list:');
        if(position === null || position === "")
        {
            alert("Enter index please");
        }
        else if(list.removeFrom(+position) === false)
        {
            alert("Index can't be bigger or equal than size of list");
        }
        show_list(list);
    }
}

function list_removeElement(list)
{
    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let element = prompt('Enter element to be deleted from list:');
        if(element === null || element === "")
        {
            alert("Enter element please");
        }
        else if(list.removeElement(+element) === false)
        {
            alert("Inputed element is not in list");
        }
        show_list(list);
    }
}

function list_findIndex(list)
{
    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let element = prompt('Enter element to be found in list:');
        const listIterator = new ListIterator();

        if(element === null || element === "")
        {
            alert("Enter element please");
        }
        else if(listIterator.IndexOf(+element,list) === false)
        {
            alert("Inputed element is not in list");
        }
        else
        {
            alert(`Index of inputed element is ${listIterator.IndexOf(+element,list)}`);
        }
        show_list(list);
    }
}

function list_findElement(list)
{
    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let index = prompt('Enter index of element to be found in list:');
        const listIterator = new ListIterator();

        if(index === null || index === "")
        {
            alert("Enter index of element please");
        }
        else if(listIterator.findWithIndex(+index,list) === false)
        {
            alert("Index can't be bigger or equal than size of list");
        }
        else
        {
            alert(`Element with inputed index is ${listIterator.findWithIndex(+index,list)}`);
        }
        show_list(list);
    }
}

function list_sort(list)
{
    if(list.isEmpty())
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        const sortStrat = new SortingStrategy();
        list = sortStrat.sort(list);
        show_list(list);
        return list;
    }
}

function queue_enqueue(queue)
{
    let element = prompt('Enter element to enque into queue:');
    if(element === null || element === "")
    {
        queue.enqueue(0);
    }
    else
    {
        queue.enqueue(+element);
    }
    show_queue(queue);
}

function queue_dequeue(queue)
{
    if(queue.isEmpty())
    {
        alert("Queue is empty! Enqueue something in queue firstly");
    }
    else
    {
        queue.dequeue();
        show_queue(queue);
    }
}

function queue_front(queue)
{
    if(queue.isEmpty())
    {
        alert("Queue is empty! Enqueue something in queue firstly");
    }
    else
    {
        alert(`Front element of queue is ${queue.front()}`);
        show_queue(queue);
    }
}

function stack_push(stack)
{
    let element = prompt('Enter element to push into stack:');
    if(element === null || element === "")
    {
        stack.push(0);
    }
    else
    {
        stack.push(+element);
    }
    show_stack(stack);
}

function stack_pop(stack)
{
    if(stack.isEmpty())
    {
        alert("Stack is empty! Push something in stack firstly");
    }
    else
    {
        stack.pop();
        show_stack(stack);
    }
}

function stack_peek(stack)
{
    if(stack.isEmpty())
    {
        alert("Stack is empty! Push something in stack firstly");
    }
    else
    {
        alert(`Peek element of stack is ${stack.peek()}`);
        show_stack(stack);
    }
}

function time_push(timeList)
{
    const tmr = document.getElementById('showTime');
    let element = prompt('Enter element to push back into list:');
    if(element === null || element === "")
    {
        showTime.innerHTML = `Time of processing: ${timeList.push_back(0)} ms`;
    }
    else
    {
        showTime.innerHTML = `Time of processing: ${timeList.push_back(+element)} ms`;
    }
    show_timeList(timeList);
}

function time_insertAt(timeList)
{
    const popup = document.getElementById('popup');
    const element = document.getElementById('elmnt');
    const index = document.getElementById('index');


    if(timeList.getSize() === 0)
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        popup.style.display = 'block';
        document.getElementById('btn_popup').onclick = function () {
            if(element.value === "" || index.value === "")
            {
                element.value = 0;
                index.value = 0;
            }

            if(timeList.insertAt(+element.value,+index.value) === false)
            {
                timeList.removeFrom(+index.value);
                alert("Index can't be bigger than size of list");
            }
            else
            {
                timeList.removeFrom(+index.value);
                showTime.innerHTML = `Time of processing: ${timeList.insertAt(+element.value,+index.value)} ms`;
            }

            popup.style.display = 'none';
            show_timeList(timeList);
        }
    }
}

function time_removeFrom(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let position = prompt('Enter index of element to be deleted from list:');
        let time = timeList.removeFrom(+position);
        if(position === null || position === "")
        {
            alert("Enter index please");
        }
        else if(time === false)
        {
            alert("Index can't be bigger or equal than size of list");
        }
        else
        {
            showTime.innerHTML = `Time of processing: ${time} ms`;
        }
        show_timeList(timeList);
    }
}

function time_removeElem(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let element = prompt('Enter element to be deleted from list:');
        let time = timeList.removeElement(+element);
        if(element === null || element === "")
        {
            alert("Enter element please");
        }
        else if(time === false)
        {
            alert("Inputed element is not in list");
        }
        else
        {
            showTime.innerHTML = `Time of processing: ${time} ms`;
        }
        show_timeList(timeList);
    }
}

function time_findIndex(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let element = prompt('Enter element to be found in list:');
        let time = timeList.indexOf(+element);
        if(element === null || element === "")
        {
            alert("Enter element please");
        }
        else if(time === false)
        {
            alert("Inputed element is not in list");
        }
        else
        {
            showTime.innerHTML = `Time of processing: ${time[1]} ms`;
            alert(`Index of inputed element is ${time[0]}`);
        }
        show_timeList(timeList);
    }
}

function time_findElement(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("List is empty! Push something in list firstly");
    }
    else
    {
        let index = prompt('Enter index of element to be found in list:');
        let time = timeList.findWithIndex(+index);
        if(index === null || index === "")
        {
            alert("Enter index of element please");
        }
        else if(time === false)
        {
            alert("Index can't be bigger or equal than size of list");
        }
        else
        {
            showTime.innerHTML = `Time of processing: ${time[1]} ms`;
            alert(`Element with inputed index is ${time[0]}`);
        }
        show_timeList(timeList);
    }
}

function time_bubbleSort(timeList)
{
    showTime.innerHTML = `Time of processing: ${timeList.bubbleSort()} ms`;
    show_timeList(timeList);
}

function time_mergeSort(timeList)
{
    showTime.innerHTML = `Time of processing: ${timeList.mergeSort()} ms`;
    show_timeList(timeList);
}

function time_quickSort(timeList)
{
    showTime.innerHTML = `Time of processing: ${timeList.quickSort()} ms`;
    show_timeList(timeList);
}

function make_queue(list)
{
    let queue = new Queue(list);
    show_queue(queue);
    const que = document.getElementById('queue');
    que.style.display = 'block';
    empty_list.style.display = 'none';

    document.getElementById('enq').onclick = function () {queue_enqueue(queue);}
    document.getElementById('deq').onclick = function () {queue_dequeue(queue);}
    document.getElementById('front').onclick = function () {queue_front(queue);}
    document.getElementById('other_list_queue').onclick = function () {
        que.style.display = 'none';
    }
}

function make_stack(list)
{
    let stack = new Stack(list);
    show_stack(stack);
    const sta = document.getElementById('stack');
    sta.style.display = 'block';
    empty_list.style.display = 'none';

    document.getElementById('push_st').onclick = function () {stack_push(stack);}
    document.getElementById('pop').onclick = function () {stack_pop(stack);}
    document.getElementById('peek').onclick = function () {stack_peek(stack);}
    document.getElementById('other_list_stack').onclick = function () {
        sta.style.display = 'none';
    }
}

function make_timeMeas(list)
{
    let timeList = new TimeMeasureDecorator(list);
    show_timeList(timeList);
    const timeShow = document.getElementById('time_measure');
    timeShow.style.display = 'block';
    empty_list.style.display = 'none';

    document.getElementById('time_push').onclick = function () {time_push(timeList);}
    document.getElementById('time_ins_at').onclick = function () {time_insertAt(timeList);}
    document.getElementById('time_rem_ind').onclick = function () {time_removeFrom(timeList);}
    document.getElementById('time_rem_elmnt').onclick = function () {time_removeElem(timeList);}
    document.getElementById('time_find_ind').onclick = function () {time_findIndex(timeList);}
    document.getElementById('time_find_elmnt').onclick = function () {time_findElement(timeList);}
    document.getElementById('time_bubble').onclick = function () {time_bubbleSort(timeList);}
    document.getElementById('time_merge').onclick = function () {time_mergeSort(timeList);}
    document.getElementById('time_quick').onclick = function () {time_quickSort(timeList);}
    document.getElementById('other_list_time').onclick = function () {
        timeShow.style.display = 'none';
    }
}


document.getElementById('empty_list_choose').onclick = function()
{

    const listFactory = new ListFactory();
    let list = listFactory.makeEmptyList();
    show_list(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('rem_elmnt').onclick = function () {list_removeElement(list);}
    document.getElementById('find_ind').onclick = function () {list_findIndex(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('sort').onclick = function () {list = list_sort(list);}
    document.getElementById('turn_queue').onclick = function () {make_queue(list);}
    document.getElementById('turn_stack').onclick = function () {make_stack(list);}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('random_list').onclick = function()
{

    let number = prompt('Enter number of elements in list: ');
    const listFactory = new ListFactory();
    let list = listFactory.makeRandomList(number);
    show_list(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('rem_elmnt').onclick = function () {list_removeElement(list);}
    document.getElementById('find_ind').onclick = function () {list_findIndex(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('sort').onclick = function () {list = list_sort(list);}
    document.getElementById('turn_queue').onclick = function () {make_queue(list);}
    document.getElementById('turn_stack').onclick = function () {make_stack(list);}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('cstm_list').onclick = function()
{

    const listFactory = new ListFactory();
    let list = listFactory.makeFixedList();
    show_list(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('rem_elmnt').onclick = function () {list_removeElement(list);}
    document.getElementById('find_ind').onclick = function () {list_findIndex(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('sort').onclick = function () {list = list_sort(list);}
    document.getElementById('turn_queue').onclick = function () {make_queue(list);}
    document.getElementById('turn_stack').onclick = function () {make_stack(list);}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('own_list').onclick = function()
{

    let number = +prompt('Enter number of elements in list: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Enter element: ");
        elements = [...elements, elem];
    }
    const listFactory = new ListFactory();
    let list = listFactory.makeOwnList(elements);
    show_list(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('rem_elmnt').onclick = function () {list_removeElement(list);}
    document.getElementById('find_ind').onclick = function () {list_findIndex(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('sort').onclick = function () {list = list_sort(list);}
    document.getElementById('turn_queue').onclick = function () {make_queue(list);}
    document.getElementById('turn_stack').onclick = function () {make_stack(list);}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}