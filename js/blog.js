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
        let userDataString = localStorage.getItem('fake-blog__' + username);
        let userPosts = (userDataString ? JSON.parse(userDataString) : []);
        setupMain(username, userPosts);
        loginScreen.classList.toggle('hidden');
        mainScreen.classList.toggle('hidden');
    });

    function setupMain(username, userPosts) {
        if (!userPosts) {
            userPosts = [];
        }
        let usernameDisplay = mainScreen.querySelector('.fake-blog--username');
        usernameDisplay.textContent = username;

        let postContainer = mainScreen.querySelector('.fake-blog--posts'); 
        let postTemplate = mainScreen.querySelector('#fake-blog--post-template').content;

        for(const post of userPosts) {
            if(post.date && post.text)
                newPost(username, post.date, post.text);
        }

        let postForm = mainScreen.querySelector('.fake-blog--post-form');
        let postTextarea = postForm.querySelector('.fake-blog--post-form textarea');
        postForm.addEventListener('submit', function(evt) {
            evt.preventDefault();
            let currentDateString = (new Date()).toLocaleString();
            newPost(username, currentDateString, postTextarea.value);
            userPosts.push({'date': currentDateString, 'text': postTextarea.value});
            document.activeElement.blur();
            postTextarea.value = '';

            localStorage.setItem('fake-blog__' + username, JSON.stringify(userPosts));
        });

        function newPost(username, date, text) {
            let newPost = postTemplate.cloneNode(true);
            let postText = newPost.querySelector('.fake-blog--post__text');
            let postUsername = newPost.querySelector('.fake-blog--post__username');
            let postDate = newPost.querySelector('.fake-blog--post__date');

            postUsername.textContent = username;
            postDate.textContent = date;
            postText.textContent = text;

            postContainer.insertBefore(newPost, postContainer.firstChild);
        }
    }
})();

/*
'fake-blog__username1': [
    {
        date: 
        text: 
    },
    {
        date: 
        text:
    }
],
'fake-blog__username2': [
    ...
]

on login:
    create userPosts
    if username in localStorage:
        populate userPosts with parsed JSON
    setupMain(username, userPosts)
        for each userpost
            createPost(username, userpost.date, userpost.text)
        add listeners
        on submit new post:
            createPost(username, Date(), textarea.value)
            add new object to userPosts
        on logout:
            store userposts under fake-blog__<username>

*/