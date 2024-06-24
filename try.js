function fetchLink () {
    //connect to server
    const promise = fetch("https://jsonplaceholder.typicode.com/posts");
    //if the server responses with success
    promise.then(async (response) => {
        const array = await response.json();
        let html ="";
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            html += `<a href="pages/dynamic.html?postId=${array[i].id}"> ${array[i].id}`
            counter++;
            if (counter === 20) {
                break;
            }
    
        }
        document.getElementById("Main_Content").innerHTML = html;
    });
    // new way to create a function
    //if server respond with error
    promise.catch((error) => {
        console.error(error);
    });
}
fetchLinks ();