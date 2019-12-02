(function() {
    let loginScreen = document.querySelector('.fake-blog--login-screen');
    let mainScreen = document.querySelector('.fake-blog--main');
    loginScreen.classList.remove('hidden');
    mainScreen.classList.add('hidden');

    let loginForm = loginScreen.querySelector('.fake-blog--login-form');
    let loginUsernameInput = loginForm.querySelector('.fake-blog--name-input');
    let firstLogin = true; //HAAAX


    let loggedInUserDislplay = mainScreen.querySelector('.fake-blog--logged-in-as');
    let usernameDisplay = mainScreen.querySelector('.fake-blog--username');
    
    let postContainer = mainScreen.querySelector('.fake-blog--posts'); 
    let postTemplate = mainScreen.querySelector('#fake-blog--post-template').content;
    
    let postForm = mainScreen.querySelector('.fake-blog--post-form');
    let postTextarea = postForm.querySelector('.fake-blog--post-form textarea');

    let visitForm = mainScreen.querySelector('.fake-blog--visit');
    let goHome = mainScreen.querySelector('#fake-blog__home');

    let loggedInUser;
    let displayedUser;
    let displayedPosts = [];


    loginForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        if(!loginUsernameInput.value)
            return;
        
        loggedInUser = loginUsernameInput.value;
        if(firstLogin) {
            setupMain();
            firstLogin = false;
        }
        else {
            showBlog(loggedInUser);
        }

        loginScreen.classList.toggle('hidden');
        mainScreen.classList.toggle('hidden');
    });

    function setupMain() {

        showBlog(loggedInUser);

        postForm.addEventListener('submit', submitPostHandler);
        visitForm.addEventListener('submit', visitBlogHandler);
        goHome.addEventListener('click', goHomeHandler);

            let logOut = mainScreen.querySelector('#fake-blog__logout');
            logOut.addEventListener('click', function(evt) {
                evt.preventDefault();
                loginScreen.classList.toggle('hidden');
                mainScreen.classList.toggle('hidden');
            });
    }

    function goHomeHandler(evt) {
        evt.preventDefault();
        showBlog(loggedInUser);
    }

    function submitPostHandler(evt) {
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
    }

    function visitBlogHandler(evt) {
        evt.preventDefault();
        let visitUsername = visitForm.querySelector('input[type="text"]').value;
        // if(localStorage.getItem('fake-blog__' + visitUsername)) {
            displayedUser = visitUsername;
            showBlog(visitUsername);
        // }
        // else {
        //     //TODO show error
        // }

    }

    function showBlog(username) {
        loggedInUserDislplay.textContent = 'Logged in as ' + loggedInUser;

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