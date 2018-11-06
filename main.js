'use strict';

;(function () {
    var ESC_KEYCODE = 27;

    var modalLogin = document.querySelector('.modal-login');
    var modalMap = document.querySelector('.modal-map');
    var modalOverlay = document.querySelector('.modal-overlay');
    var loginButton = document.querySelector('.login-link');
    var mapButtons = document.querySelectorAll('a[href="map.html"]');
    var loginInput = document.querySelector('#user-login');
    var loginPassword = document.querySelector('#user-password');
    var modalCloseLogin = document.querySelector('.modal-close-login');
    var modalCloseMap = document.querySelector('.modal-close-map');

    var closeLoginPopup = function () {
        modalLogin.classList.remove('show-modal');
        modalOverlay.classList.remove('show-modal');
        document.removeEventListener('keydown', onLoginPressEsc);
    };

    var closeMapPopup = function () {
        modalMap.classList.remove('show-modal');
        modalOverlay.classList.remove('show-modal');
        document.removeEventListener('keydown', onMapPressEsc);
    };

    var onLoginPressEsc = function (event) {
        if (event.keyCode === ESC_KEYCODE && loginInput !== document.activeElement && loginPassword !== document.activeElement) {
            closeLoginPopup();
        }
    };

    var onMapPressEsc = function (event) {
        if (event.keyCode === ESC_KEYCODE) {
            closeMapPopup();
        }
    };

    loginButton.addEventListener('click', function () {
        event.preventDefault();
        modalLogin.classList.add('show-modal');
        modalOverlay.classList.add('show-modal');
        modalCloseLogin.addEventListener('click', function () {
            closeLoginPopup();
        });
        modalOverlay.addEventListener('click', function () {
            closeLoginPopup();
        });
        document.addEventListener('keydown', onLoginPressEsc);

    });    

    mapButtons.forEach(function (currentMapButton) {
        currentMapButton.addEventListener('click', function () {
            event.preventDefault();
            modalMap.classList.add('show-modal');
            modalOverlay.classList.add('show-modal');
            modalCloseMap.addEventListener('click', function () {
                closeMapPopup();
            });
            modalOverlay.addEventListener('click', function () {
                closeMapPopup();
            });
            document.addEventListener('keydown', onMapPressEsc);
        });
    });

    window.main

})();
