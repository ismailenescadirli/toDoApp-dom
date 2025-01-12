    const addtodoList = document.querySelector('.userlogin-input');
    const secondgraound = document.querySelector('.secondgraound');
    const firsth2 = document.querySelector('.firsth2');
    const secondh2 = document.querySelector('.secondh2');

    function run() {
        setupAddTodoListener();
        setupClearAllListener();
    }

    function setupAddTodoListener() 
           {
        addtodoList.addEventListener('keypress', function (event) 
            {
            if (event.key === 'Enter' && addtodoList.value.trim() !== '') {
                const todoText = addtodoList.value.trim();
                addTodoItem(todoText);
                addtodoList.value = ''; 
                updateItemsCount();
            }
        }
            );
            }

    function setupClearAllListener() 
    {
        secondh2.addEventListener('click', clearAllItems); 
    }

    function addTodoItem(text) 
    {
        const todoItem = createTodoItem(text);
        secondgraound.appendChild(todoItem);
    }

    function createTodoItem(text) 
    {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');

        const todoInput = createTodoInput(text);
        const iconsDiv = createIconsDiv();

        todoDiv.appendChild(todoInput);
        todoDiv.appendChild(iconsDiv);

        return todoDiv;
    }

    function createTodoInput(text) 
    {
        const todoInput = document.createElement('input');
        todoInput.type = 'text';
        todoInput.classList.add('userlogin-ainput');
        todoInput.placeholder = text;
        todoInput.setAttribute('readonly', true);
        return todoInput;
    }

    function createIconsDiv() 
    {
        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add('icons');

        const editIcon = createIcon('edit', '/assets/css/img/editicon.png');
        const deleteIcon = createIcon('delete', '/assets/css/img/deleteicon.png');

        iconsDiv.appendChild(editIcon);
        iconsDiv.appendChild(deleteIcon);

        return iconsDiv;
    }

    function createIcon(type, src) 
    {
        const icon = document.createElement('img');
        icon.src = src;
        icon.classList.add(`${type}-icon`);
        icon.dataset.type = type; 
        return icon;
    }

    function setupIconsClickListener() 
    {
        secondgraound.addEventListener('click', function (event)
          {
            if (event.target.classList.contains('edit-icon')) {
                handleEdit(event.target); 
            }

            if (event.target.classList.contains('delete-icon')) {
                handleDelete(event.target); 
            }
        }
    );
    }

    function handleEdit(icon)
     {
        const inputField = icon.closest('.todo-item').querySelector('.userlogin-ainput');
        inputField.removeAttribute('readonly');
        inputField.focus();
    }

    function handleDelete(icon) 
    {
        const todoItem = icon.closest('.todo-item');
        secondgraound.removeChild(todoItem);
        updateItemsCount(); 
    }


    function updateItemsCount() 
    {
        const itemsLeft = secondgraound.querySelectorAll('.userlogin-ainput').length;
        firsth2.textContent = (`${itemsLeft} items left`);
    }

  
    function clearAllItems() 
    {
        secondgraound.innerHTML = ''; 
        updateItemsCount(); 
    }

    run();
    setupIconsClickListener(); 
