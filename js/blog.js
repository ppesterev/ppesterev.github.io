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
        let usernameDisplay = mainScreen.querySelector('.fake-blog--username');
        usernameDisplay.textContent = username;

        let postContainer = mainScreen.querySelector('.fake-blog--posts'); 
        let postTemplate = mainScreen.querySelector('#fake-blog--post-template').content;

        let postForm = mainScreen.querySelector('.fake-blog--post-form');
        let postTextarea = postForm.querySelector('.fake-blog--post-form textarea');
        postForm.addEventListener('submit', function(evt) {
            evt.preventDefault();
            let newPost = postTemplate.cloneNode(true);
            postText = newPost.querySelector('.fake-blog--post__text');
            postUsername = newPost.querySelector('.fake-blog--post__username');
            postDate = newPost.querySelector('.fake-blog--post__date');

            postUsername.textContent = username;
            postDate.textContent = (new Date()).toLocaleString();
            postText.innerHTML = postTextarea.value; //replace(/\n\r?/g, '<br />')

            postContainer.insertBefore(newPost, postContainer.childNodes[0]);
            document.activeElement.blur();
            postTextarea.value = '';
        });
    }
})();