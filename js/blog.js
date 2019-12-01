(function() {
    let loginScreen = document.querySelector('.fake-blog--login-screen');
    let mainScreen = document.querySelector('.fake-blog--main');
    loginScreen.classList.remove('hidden');
    mainScreen.classList.add('hidden');

    let loginForm = loginScreen.querySelector('.fake-blog--login-form');
    let loginUsernameInput = loginForm.querySelector('.fake-blog--name-input');

    loginForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        username = loginUsernameInput.value;
        if(!username)
            return;
        setupMain(username);
        loginScreen.classList.toggle('hidden');
        mainScreen.classList.toggle('hidden');
    });

    function setupMain(username) {
        let usernameDisplay = mainScreen.querySelector('.fake-blog--info-username');
        usernameDisplay.textContent = username;
        
        let postForm = mainScreen.querySelector('.fake-blog--post-form');
        let postTextarea = postForm.querySelector('.fake-blog--post-form textarea');
        postForm.addEventListener()
    }
})();