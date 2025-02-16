// personalities_section JS
// let read_more_btn = document.querySelector(".read_more")
// let read_less_btn = document.querySelector(".read_less")
// let waqiyat_div = document.querySelector(".waqiyat")

// read_more_btn.addEventListener('click', open_waqiyat)
// read_less_btn.addEventListener('click', close_waqiyat)

// function open_waqiyat() {
//     waqiyat_div.style.height = "auto"
//     read_more_btn.style.display = "none"
//     read_less_btn.style.display = "block"
// }
// function close_waqiyat() {
//     waqiyat_div.style.height = "130px"
//     read_less_btn.style.display = "none"
//     read_more_btn.style.display = "block"
// }

// personalities_section modal JS
let personality = document.querySelectorAll("#personality")
let personality_pg = document.querySelectorAll(".personality_pg")
let pers_pg_close = document.querySelectorAll(".pers_pg_close")

// for modal open
for(let i = 0; i <= personality.length-1; i++){
    personality[i].addEventListener('click', function(e){
        personality_pg[i].style.display = "block"
        personality_pg[i].classList.add("slideIn_right_anim")
        setTimeout(function() {
            personality_pg[i].classList.remove("slideIn_right_anim")
        }, 500);
        e.preventDefault()
    })
}
// for close personality_pg
for(let i = 0; i <= pers_pg_close.length-1; i++) {
    pers_pg_close[i].addEventListener('click', function(){
        personality_pg[i].classList.add("slideOut_left_anim")
        setTimeout(function() {
            personality_pg[i].classList.remove("slideOut_left_anim")
            personality_pg[i].style.display = "none"
        }, 500);
    })

    pers_pg_close[i].addEventListener('mouseover', function(){
        pers_pg_close[i].classList.add("rotate_anim")
    })
    pers_pg_close[i].addEventListener('mouseleave', function(){
        pers_pg_close[i].classList.remove("rotate_anim")
    })
}