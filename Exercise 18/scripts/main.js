$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.get(appendUrl, function(response) {
        let appendList = $('#append');
        let listAdd = '';
        for (let i = 0; i < response.length; i +=1) {
            listAdd += `<li><strong>Index:</strong> ${[i+1]}<br/> <strong>Title:</strong> ${[response[i].title]}</li>`;
        }
        appendList.append(listAdd);
    })

    // I did this one in a way to make the list populate in a decending manner like in the example by decrementing the index in the for loop instead of putting the prepend call in the loop and transversing the DOM 50 times. Going for a best practice and the expected result.
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.get(prependUrl, function(response) {
        let prependList = $('#prepend');
        let listAdd2 = '';
        for (let i = response.length - 1; i >= 0; i -=1) {
            listAdd2 += `<li><strong>Index:</strong> ${[i+1]}<br/> <strong>Title:</strong> ${[response[i].title]}</li>`;
        }
        prependList.prepend(listAdd2);
    })

});