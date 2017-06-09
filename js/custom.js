var iso = null;
var number_of_boxes = 500;
var min_box_words = 25;
var max_box_words = 60;

var template =
`<div class="grid-item {{tags}}">
   <div class="box">
       {{words}}
   </div>
</div>`;

var tag_tpl = '<li class="tag">{{tag}}</li>'




$(document).ready(function(){


    tag_wrapper = $('.tag-wrapper');
    for (i=0; i<words.length ; i++) {
        tag_wrapper.append( tag_tpl.replace("{{tag}}",words[i]+" ") );
    } 


    grid = $('.grid');
    for (i=0; i<number_of_boxes ; i++) {
        box = create_box();
        grid.append(box);
    }


    iso = $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('.tag-wrapper > .tag').on('click', function(){
        console.log($(this)[0].innerText);
        tmp = new Object();
        tmp.filter = "." + $(this)[0].innerText;
        //iso.isotope({ filter: $(this)[0].innerText });
        iso.isotope(tmp);
    });

    // $.ajax({
    //     type: 'GET',
    //     url: '/api/all',

    //     error: function() {
    //         console.log("error");
    //     },
    //     dataType: 'json',
    //     success: function(data) {

    //     }
    // });
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function create_box() {
    random_words = get_random_words();
    tpl = template.replace("{{tags}}", random_words);
    tpl = tpl.replace("{{words}}", random_words);
    return tpl;
}

function get_random_words() {
    num_of_words = getRandomInt(min_box_words, max_box_words);
    word = "";
    for (j=0 ; j<num_of_words ; j++) {
        word += words[getRandomInt(0, words.length)] + " ";
    }
    // console.log(word);
    return word;
}