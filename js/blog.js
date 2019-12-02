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

    function setupMain(loggedInUser) {
        let loggedInUserDislplay = mainScreen.querySelector('.fake-blog--logged-in-as');
        let usernameDisplay = mainScreen.querySelector('.fake-blog--username');
        let postContainer = mainScreen.querySelector('.fake-blog--posts'); 
        let postTemplate = mainScreen.querySelector('#fake-blog--post-template').content;
        let displayedUser = loggedInUser;
        let displayedPosts = [];

        loggedInUserDislplay.textContent = 'Logged in as ' + loggedInUser;
        showBlog(loggedInUser);

        let postForm = mainScreen.querySelector('.fake-blog--post-form');
        let postTextarea = postForm.querySelector('.fake-blog--post-form textarea');
        postForm.addEventListener('submit', function(evt) {
            evt.preventDefault();
            let currentDateString = (new Date()).toLocaleString();
            displayPost(loggedInUser, currentDateString, postTextarea.value);
            displayedPosts.push({'username': loggedInUser,
                                 'date': currentDateString,
                                 'text': postTextarea.value
                                });
            document.activeElement.blur();
            postTextarea.value = '';

            localStorage.setItem('fake-blog__' + displayedUser, JSON.stringify(displayedPosts));
        });

        let visitForm = mainScreen.querySelector('.fake-blog--visit');
        visitForm.addEventListener('submit', function(evt) {
            evt.preventDefault();
            let visitUsername = this.querySelector('input[type="text"]').value;
            if(localStorage.getItem('fake-blog__' + visitUsername)) {
                displayedUser = visitUsername;
                showBlog(visitUsername);
            }
            else {
                //TODO show error
            }

        })

        function showBlog(username) {
            displayedUser = username;
            usernameDisplay.textContent = username;
            let userDataString = localStorage.getItem('fake-blog__' + username);
            displayedPosts = (userDataString ? JSON.parse(userDataString) : []);

            // clear post container
            while(postContainer.firstChild)
                postContainer.removeChild(postContainer.firstChild);

            // show existing posts
            for(const post of displayedPosts) {
                if(post.date && post.text)
                    displayPost(post.username, post.date, post.text);
            }
        }

        function displayPost(username, date, text) {

            let newPost = postTemplate.querySelector('.fake-blog--post').cloneNode(true);
            let postText = newPost.querySelector('.fake-blog--post__text');
            let postUsername = newPost.querySelector('.fake-blog--post__username');
            let postDate = newPost.querySelector('.fake-blog--post__date');

            postUsername.textContent = username;
            postDate.textContent = date;
            postText.textContent = text;

            if(loggedInUser === username) {
                newPost.classList.add('my-post');
            }
            if(displayedUser === username) {
                newPost.classList.add('owners-post');
            }
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
    
    setupMain(loggedInUser)
        displayedUser = loggedInUser
        showBlog(loggedInUser)

        add listeners
        on submit new post:
            addPost(username, Date(), textarea.value)
            add new object to userposts
            store stringified userposts

        on switch user:
           update displayedUser 
           showBlog(displayedUser)

        showBlog(username)
            userposts = parse(localstorage.getitem(username))
            for each userpost
                addPost(username, userpost.date, userpost.text)
*/