var iso = null;

var template =
`<div class="handbars-tpl grid">
   <div class="grid-item">
       <div class="song-box">
           
       </div>
   </div>
</div>`;

console.log(template);


$(document).ready(function(){


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