// Structering the DOM
const app = document.getElementById('root');
const logo = document.createElement('h2');
logo.innerText = 'API connection trail';
app.appendChild(logo);

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


// Creating the obj of the request
var request = new XMLHttpRequest();

// Oppening connection using GET on the endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', 'true');

request.onload = function () {
    // Accessing the JSON data

    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.response);
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // Limit to 300 chars
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

            // console.log(movie.title)
            // console.log(movie.description);
        })
    }else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Mafeeesh, Htaklo al API y3ny !`;
        app.appendChild(errorMessage);
    }
};

// Send the request
request.send();

