console.log(people);

$(document).ready(postPics);

let answer = '';

function postPics(){
    // $('#pictureList').append(`<div>${people[3].githubUsername}</div>`)
    for(let persons of people){
        let profPic = $(`<div><img src="https://github.com/${persons.githubUsername}.png?size=250" alt="Profile image of ${persons.name}"></div>`);
        profPic.data('name', persons.name)
        $('#pictureList').append(profPic);
    }
    newName();
    $('div').on('click', clickMe);
}

function newName(){
    let i = randomNumber(0, 24)
    $('.findName').text(people[i].name)
    answer = people[i].name;
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
        alert('You are correct! On to the next brilliant developer...');
        // setTimeout(newName(); {alert('You are correct! On to the next brilliant developer...');}, 2000);
        newName();
    } else {
        alert('Whoops! Look closely at the name and picture and try again...')
    };
}