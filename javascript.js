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

createdivs(3, `CHECK TIRE PRESSURE BEFORE SENDING`);

//Spent several hours over the last 3 days learning to bundle modules with webpack. 
//committing here to long SOME progress on github. 8.22
//logging some progress 8/27
//Logging some progress on Bat in the spaceshipi project on scratch 9/10
//Logging some progress on Bat in the spaceship project on scratch 9/11
