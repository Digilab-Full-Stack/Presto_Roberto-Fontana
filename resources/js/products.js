// Creazione filtri di ricerca


// ricerca per TIPOLOGIA CAMERA

fetch('../products.json')
    .then((response) => response.json())
    .then(dataFilter => {

        // catture elementi HTML
        let radioWrapper = document.querySelector('#radioWrapper');
        let switchWrapper = document.querySelector('#switchWrapper');
        let cards1Wrapper = document.querySelector('#cards1Wrapper');
        let cards2Wrapper = document.querySelector('#cards2Wrapper');


        // collegamento radiobuttons con i soli prodotti aventi come Categoria: Camere      
        function setCategory() {
            let singleRoom = [];

            dataFilter.forEach(product => {
                if (product.category === "Camere") {
                    if (!singleRoom.includes(product.name)) {
                        singleRoom.push(product.name);
                    }
                }
            });
            singleRoom.sort();

            singleRoom.forEach((product) => {
                let div = document.createElement('div');
                div.classList.add('form-check');

                div.innerHTML = `<input class="form-check-input" type="radio" name="product"
                 id="${product}" value="${product}"><label class="form-check-label" for="${product}">
                ${product}</label>`;

                radioWrapper.appendChild(div);
            });

            // Aggiunto event listener ai radio buttons per mostrare solo la card del prodotto corrispondente
            radioWrapper.addEventListener('change', (event) => {
                filterByRoomName(event.target.value);
            });
        }

        setCategory();


        // collegamento switch con i soli prodotti aventi come Categoria: Servizi

        function setServices() {
            let singleService = [];

            dataFilter.forEach(product => {
                if (product.category === "Servizi") {
                    if (!singleService.includes(product.name)) {
                        singleService.push(product.name);
                    }
                }
            });
            singleService.sort();

            singleService.forEach((product) => {
                let div = document.createElement('div');
                div.classList.add('form-check', 'form-switch');

                div.innerHTML = `<input class="form-check-input" type="checkbox" role="switch" id="${product}" value="${product}"S>
                <label class="form-check-label" for="${product}">${product}</label>`;

                switchWrapper.appendChild(div);
            });
            switchWrapper.addEventListener('change', (event) => {
                filterByServiceName(event.target.value);
            });

        }

        setServices();



        // creazione card prodotti con Categoria: Camere
        function createCards1(products) {
            cards1Wrapper.innerHTML = '';
            products.forEach((product) => {
                let div = document.createElement('div');
                div.classList.add("col-6", "col-md-4", "mb-3");
                div.innerHTML = `<div class="card fixed-height-card">
                            <img src="../../media/room.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title ">${product.name}</h5>
                                <p class="card-text">${product.category}</p>
                                <p class="card-text">€ ${product.price}</p>

                            </div>
                        </div>`;
                cards1Wrapper.appendChild(div);
            });
        }

        createCards1(dataFilter.filter(product => product.category === "Camere"));

        // funzione per mostrare solo la card corrispondente al radio button selezionato
        function filterByRoomName(productName) {
            let filtered = dataFilter.filter((product) => product.name === productName && product.category === "Camere");
            createCards1(filtered);
        }

        // creazione cards per prodotti con Categoria: Servizi
        function createCards2(products) {
            cards2Wrapper.innerHTML = '';
            products.forEach((product) => {
                let div = document.createElement('div');
                div.classList.add("col-6", "col-md-4", "mb-3")
                div.innerHTML = `<div class="card fixed-height-card">
                        <img src="../../media/acavallo.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title ">${product.name}</h5>
                            <p class="card-text">${product.category}</p>
                            <p class="card-text">€ ${product.price}</p>

                        </div>
                    </div>`

                cards2Wrapper.appendChild(div)
            });
        }
        // usato metodo .filter per creare un nuovo array che soddisfa la condizione: Categoria = Servizi
        createCards2(dataFilter.filter(product => product.category === "Servizi"));

        // funzione per mostrare solo la card corrispondente allo switch selezionato
        function filterByServiceName(productName) {
            let filtered = dataFilter.filter((product) => product.name === productName && product.category === "Servizi");
            createCards2(filtered);
        }


    })

