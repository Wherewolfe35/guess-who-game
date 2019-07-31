console.log(people);

$(document).ready(shuffleOrder);

let answer = '';

//rearrange the order of pictures
function shuffleOrder() {
    shuffleArray(people);
    $('#pictureList').children().remove();
    postPics();
    $('button').on('click', cheatMode);
}

// append pictures to the DOM
function postPics(){
    for(let persons of people){
        let profPic = $(`<div><img class="image" src="https://github.com/${persons.githubUsername}.png?size=250" alt="Profile image of ${persons.name}"><div class="not-text">${persons.name}</div></div>`);
        profPic.data('name', persons.name);
        $('#pictureList').append(profPic);
    }
    newName();
    $('div').on('click', clickMe);
}

// randomly assign a new name to pick
function newName(){
    let x = randomNumber(0, 24);
    $('.findName').text(people[x].name);
    answer = people[x].name;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// //If the player clicks on the correct person give them a success message.
// Prompt the player to pick another person randomly and let them keep playing.
// If they pick the wrong person give them an error message. allow them to try again.
function clickMe(){
    console.log('I\'ve been clicked!');
    if($(this).data('name') === answer){
        let alertWindow = window.open("", "alertWindow", "width=400, height=150");
        alertWindow.document.write('<p>You are correct! On to the next brilliant developer...</p>')
        setTimeout(function () { alertWindow.close(); shuffleOrder();}, 2000);
    } else {
        alert('Whoops! Look closely at the name and picture and try again...')
    };
}

//return array with a shuffled order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//allow names to be shown on each picture
function cheatMode() {
    $('.not-text').toggleClass('text');
    if($('button').text() === 'Enable Cheat Mode'){
        $('button').text('Disable Cheat Mode');
    } else {
        $('button').text('Enable Cheat Mode');
    }
}