$(".slideToogle").slideUp();
$(".serviceTitle").click(function(){
    var container = $(this).closest(".card"); // busco al contenedor padre de donde esta flecha
    var block = container.find(".slideToogle"); // en ese contenedor busco el slideToogle
    block.slideToggle();

    // console.log($(".slideToogle"));
});

// for (var i=0; i<ncardB; i++){
//     $(".flecha").click(function(){
//         $(".slideToogle"+[i]).slideToggle();
// })}
