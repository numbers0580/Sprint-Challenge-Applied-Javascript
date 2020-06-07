// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let mainCards = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(received => {
        /*
        {"articles":
            {
                "javascript":[
                    {
                        "headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
                        "authorPhoto":"./assets/sir.jpg",
                        "authorName":"SIR RUFF'N'STUFF"},
                    {"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},
                    {"headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},
                    {"headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}
                ],
                "bootstrap":[
                    {
                        "headline":"Bootstrap 5: Get a Sneak Peak at all the New Features",
                        "authorPhoto":"./assets/fido.jpg",
                        "authorName":"FIDO WALKSALOT"},
                    {"headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
                    {"headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}
                ],
                "technology":[
                    {"headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
                    {"headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},
                    {"headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}
                ],"jquery":[
                    {"headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},
                    {"headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},
                    {"headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"}
                ],
                "node":[
                    {"headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUF"},
                    {"headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"}
                ]
            }
        }
        */
       let totalArticles = received.data.articles; // "javascript...", "bootstrap...", "technology...", "jquery...", "node..."
       //so: totalArticles.javascript[0 - 3] has "headline", "authorPhoto", "authorName" keys
       //The same is true for totalArticles.bootstrap, totalArticles.technology, totalArticles.jquery, totalArticles.node
       totalArticles.javascript.forEach(function(js) {
           //Each of these should now only contain one object with the keys of headline, authorPhoto, and authorName. Same for the following .forEach's
           mainCards.appendChild(cardMaker(js));
       });
       totalArticles.bootstrap.forEach(function(bt) {
           mainCards.appendChild(cardMaker(bt));
        });
       totalArticles.technology.forEach(function(tc) {
           mainCards.appendChild(cardMaker(tc));
        });
       totalArticles.jquery.forEach(function(jq) {
           mainCards.appendChild(cardMaker(jq));
        });
       totalArticles.node.forEach(function(nd) {
           mainCards.appendChild(cardMaker(nd));
        });
    })
    .catch(errorMsg => {
        console.log('Error getting data from articles URL');
    })

    function cardMaker(articleObj) {
        let topDiv = document.createElement('div');
        let headlineDiv = document.createElement('div');
        let authorsDiv = document.createElement('div');
        let imageDiv = document.createElement('div');
        let theImage = document.createElement('img');
        let authorsName = document.createElement('span');

        topDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorsDiv.classList.add('author');
        imageDiv.classList.add('img-container');

        headlineDiv.textContent = articleObj.headline;
        theImage.setAttribute('src', articleObj.authorPhoto);
        authorsName.textContent = `By ${articleObj.authorName}`;

        imageDiv.appendChild(theImage);
        authorsDiv.appendChild(imageDiv);
        authorsDiv.appendChild(authorsName);
        topDiv.appendChild(headlineDiv);
        topDiv.appendChild(authorsDiv);

        return topDiv;
    }