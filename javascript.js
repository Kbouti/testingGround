function createdivs(n, message) {



    for (let i = 0; i <n; i++){

        const content = document.getElementById(`content`);

        const element1 = document.createElement(`div`);
        element1.classList.add(`tire`)
        element1.classList.add(`tire${i}`)
        element1.innerHTML = message;
        content.appendChild(element1);

        const element2 = document.createElement(`div`);
        element2.classList.add(`tire`)
        element2.classList.add(`tire${i}`)
        element2.innerHTML = message;
        content.appendChild(element2);

    }
}

// createdivs(3, `CHECK TIRE PRESSURE BEFORE SENDING`);
