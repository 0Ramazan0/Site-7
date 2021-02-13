// Pagination Article
let artAll = document.querySelectorAll('.posts > article');
let widthPosts = artAll[0].offsetWidth;
if (artAll.length > 4) {};
Array.from(document.querySelectorAll(".filter__li")).forEach((item) => {
    item.addEventListener('click', activeCat, { capture: true });
    console.log('s');
});

// Add class Filter
function activeCat(event) {

    if (event.target.nodeName == "INPUT") {
        return
    }
    event.target.closest('.filter__li').classList.toggle("activeFil");

    changeViewPosts(pageYOffset);
    return;

}
// Blog Filter
function changeViewPosts(pageY) {


    let allActiveFil = Array.from(document.querySelectorAll('.activeFil'));
    let activeFilCat = [];
    let activeFilArch = [];
    allActiveFil.forEach(item => {

        if (item.classList.contains('filter__li__cat')) {
            activeFilCat.push(item.querySelector('.filer__span').innerText)
        } else {
            activeFilArch.push(item.querySelector('.filer__span').innerText)
        }
    });



    let artAllView = Array.from(document.querySelectorAll('.posts > article'));
    artAllView.forEach(function(item) {


        let dataInner = item.querySelector('.data').innerText.split(' ').slice(-2).join(' ');

        let groupInner = item.querySelector('.post__group').innerText;
        if (allActiveFil.length != 0) {
            if (activeFilArch.length == 0 || activeFilCat.length == 0) {
                if (!(activeFilArch.includes(dataInner) || activeFilCat.includes(groupInner))) {
                    item.classList.add('hide__post');
                } else {
                    item.classList.remove('hide__post');
                }
            } else {
                if (!(activeFilArch.includes(dataInner) && activeFilCat.includes(groupInner))) {
                    item.classList.add('hide__post');
                } else {
                    item.classList.remove('hide__post');
                }

            }
        } else {
            item.classList.remove('hide__post');

        }
        window.scrollTo(0, pageY);



    })
    if (document.querySelectorAll('.hide__post').length == artAllView.length) {
        document.querySelector('.posts').style.minWidth = widthPosts + 'px';
    } else {
        document.querySelector('.posts').style.minWidth = '';

    }

}
// Menu Burger

document.querySelector('.burger').onclick = function(event) {
    document.querySelector('.header__nav').classList.toggle("active")
    document.querySelector('.burger').classList.toggle("active")
    document.querySelector('body').classList.toggle("lock")
};
document.querySelector('.nav__items').onclick = function(event) {
    document.querySelector('.header__nav').classList.remove("active")
    document.querySelector('.burger').classList.remove("active")
    document.querySelector('body').classList.remove("lock")
};

// Filter down

document.querySelector('.filter__pointer').onclick = function(event) {
    document.querySelector('.filter').classList.add('activeFilter');
    document.querySelector('.filter__pointer').style.display = 'none';

}
document.querySelector('main').addEventListener('click', function(event) {
    if (!(event.target.closest('.filter') || event.target.classList.contains('filter__pointer'))) {
        document.querySelector('.filter').classList.remove('activeFilter');
        document.querySelector('.filter__pointer').style.display = '';


    }

})