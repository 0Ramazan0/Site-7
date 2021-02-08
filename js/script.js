// Intro Slider
new Swiper('.intro__slider', {
    // Arrow
    navigation: {
        nextEl: '.slider__button__next',
        prevEl: '.slider__button__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // Infiniti slider
    loop: true,
    // Swipe effect
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true

    }

});

// Comment Slider
new Swiper('.comment__swiper', {

    // Infiniti slider
    loop: true,
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // AutoPlay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});


// Popup Contact Us

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
console.log('ss');
let unlock = true;

let timeout = 500;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function(event) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            console.log(currentPopup);
            popupOpen(currentPopup);
            event.preventDefault();
        })
    }
}

let popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {

    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];

        el.addEventListener('click', function(e) {

            popupClose(el.closest('.popup'));
            e.preventDefault();


        });
    }



}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }

        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    };

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);

}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        console.log('sas')
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout)
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}
(function() {

    // проверяем поддержку
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

})();
(function() {

    // проверяем поддержку
    if (!Element.prototype.matches) {

        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;

    }

})();


// Portfolio Works
let buttons = document.querySelector('.portfolio__buttons');
buttons.addEventListener('click', buttonsClick);
let allImg = document.querySelectorAll('.portfolio__img__wrap');

function buttonsClick(event) {
    if (event.target.nodeName == 'BUTTON') {
        for (let i of buttons.children) {
            i.style.background = 'white';
            i.style.color = 'black';
        }
        for (let i of allImg) {

            i.style.display = '';
            i.style.marginTop = '';
            i.style.width = '';
            i.firstElementChild.style.height = '';
        }
        document.querySelector('.portfolio__works').classList.remove('portfolio__works__flex');

    };
    switch (event.target.id) {
        case 'allButton':
            allButClick(event.target)
            break;
        case 'brochButton':
            brochButClick(event.target)
            break;
        case 'webButton':
            webButClick(event.target)
            break;
        case 'logsButton':
            logsButClick(event.target)
            break;
    }
}

function allButClick(elem) {
    elem.style.background = 'black';
    elem.style.color = 'white';

}

function brochButClick(elem) {
    elem.style.background = 'black';
    elem.style.color = 'white';


    for (let i of allImg) {
        if (!(i.firstElementChild.classList.contains("broch"))) {

            i.style.display = 'none';
        } else {
            i.style.display = '';
            i.style.marginTop = '0';
            if (document.documentElement.clientWidth > 940) {
                i.style.width = `${100 / document.querySelectorAll('.broch').length}%`;
                i.firstElementChild.style.height = '100%';
            }

        }
    }
    if (document.documentElement.clientWidth > 960) document.querySelector('.portfolio__works').classList.add('portfolio__works__flex');
}

function webButClick(elem) {
    elem.style.background = 'black';
    elem.style.color = 'white';

    for (let i of allImg) {
        if (!(i.firstElementChild.classList.contains("web"))) {
            i.style.display = 'none';
        } else {
            i.style.display = '';
            i.style.marginTop = '0';
            if (document.documentElement.clientWidth > 940) {
                i.style.width = `${100 / document.querySelectorAll('.web').length}%`;
                i.firstElementChild.style.height = '100%';
            }
        }
    }
    if (document.documentElement.clientWidth > 960) document.querySelector('.portfolio__works').classList.add('portfolio__works__flex');

}

function logsButClick(elem) {
    elem.style.background = 'black';
    elem.style.color = 'white';
    for (let i of allImg) {
        if (!(i.firstElementChild.classList.contains("log"))) {
            i.style.display = 'none';
        } else {
            i.style.display = '';
            i.style.marginTop = '0';
            if (document.documentElement.clientWidth > 940) {
                i.style.width = `${100 / document.querySelectorAll('.log').length}%`;
                i.firstElementChild.style.height = '100%';
            }


        }
    }
    if (document.documentElement.clientWidth > 960) document.querySelector('.portfolio__works').classList.add('portfolio__works__flex');

}


// Change width for block with map
window.addEventListener('scroll', function(event) {
    let introHeight = document.querySelector('.intro').offsetHeight;
    let mainWidth = document.documentElement.clientWidth;
    document.querySelector('.map__block').style.left = `${((mainWidth / 10) * 5) - 145}px`;
    if (mainWidth > 800) {
        document.querySelector('.header').style.position = 'absolute';
        if ((introHeight < pageYOffset)) {
            if (goArrow) {
                document.querySelector('.arrow__top').classList.add('go__arrow');
                for (let i of document.querySelectorAll('.arrow__side')) {
                    i.style.opacity = '1'
                };
                goArrow = false;
            }

        } else {
            document.querySelector('.arrow__top').classList.remove('go__arrow');
            for (let i of document.querySelectorAll('.arrow__side')) {
                i.style.opacity = '0'
            };
            goArrow = true;

        }
        return;
    }
    if ((introHeight < pageYOffset)) {
        if (goHeader) {
            setTimeout(() => document.querySelector('.header').style.top = '0', 0);
            document.querySelector('.header').style.position = 'fixed';
            goHeader = false;
        }
    } else {
        if (pageYOffset > document.querySelector('.header').offsetHeight) {
            document.querySelector('.header').style.top = '-100%';
        } else {
            document.querySelector('.header').style.top = '0';
        }
        goHeader = true;
        document.querySelector('.header').style.position = 'absolute';
    }
    document.querySelector('.arrow__top').classList.remove('go__arrow');

});
// Arrow Top
document.querySelector('.arrow__top').addEventListener('click', arrowUp)

function arrowUp(event) {
    window.scrollTo(0, 0);
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

//