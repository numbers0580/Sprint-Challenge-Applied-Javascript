// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let mainDiv = document.createElement('div');
    let dateTag = document.createElement('span');;
    let titleTag = document.createElement('h1');
    let tempTag = document.createElement('span');

    mainDiv.classList.add('header');
    dateTag.classList.add('date');
    dateTag.textContent = 'March 28, 2019';
    titleTag.textContent = 'Lambda Times';
    tempTag.classList.add('temp');
    tempTag.textContent = '98°';

    mainDiv.appendChild(dateTag);
    mainDiv.appendChild(titleTag);
    mainDiv.appendChild(tempTag);

    return mainDiv;
}

let createdHeader = Header();
document.querySelector('.header-container').appendChild(createdHeader);
