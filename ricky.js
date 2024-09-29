/*const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username === "user" && password === "web_dev") {
        alert('you have successfully loggged in');
        location.reload();
    } else{
        loginErrorMsg.style.opacity = 1;
    }
}); 

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('username:' + username);
    console.log('password' + password);
    localStorage.setItem('isLoggedIn', 'true');
    //window.location.href = '/page';
});

*/

alert('eric kuria');


//document.getElementById("homeButton").addEventListener("click", function goToHome() {
   // alert('Redirecting to home page');
   // window.location.href = '/home';


//});


/*Document.getElementById(login).addEventListener('click', function() {
    if (username === "user" && password === "web_dev") {
        alert('you have successfully loggged in');
        location.reload();
    } else{
        loginErrorMsg.style.opacity = 1;
    }
    });
    

 
const userPictures = [
    'https: //via.placeholder.com/150',
    'https: //via.placeholder.com/150',

];
const userPicturesContainer = document.getElementById('homeButton');
displayUserPictures(userPictures);
 homeButton.addEventListener('click', function() {
    location.reload();
 });
 function displayUserPictures(pictures) {
    pictures.forEach(pictures => {
        const imgElement = document.createElement('img');
        imgElement.src = picture;
        userPicturesContainer.appendChild(imgElement);
    });
 }; 




document.getElementById("homeIcon").addEventListener("click", function goToVideos() {
    alert('redirecting to videos');
    showContent("videos",videos);


});


document.getElementById("homeIcon").addEventListener("click", function goToHome() {
    alert('redirecting to home');
    showContent("pictures",pictures);
});

    document.getElementById("messageIcon").addEventListener('click', function sendMessage(action) {
        switch (action) {
            case 'product':
                displayMessage('product information: our products are top notch');
                break;
            case 'support':
                displayMessage('support: how can we assist you today ?');
                break;
            default:
                displayMessage("unknown acion: please try again");
        }    
        function displayMessage(message) {
            const chatContainer=document.querySelector('.chat-container');
            const newMessage = document.createElement('div');
            newMessage.classList.add('message');
            newMessage.innerHTML = '<p>' + message + '</p>';
            chatContainer.appendChild(newMessage);
        };


        alert('messages');
    });

    /*function sendMessage(action) {
        switch (action) {
            case 'product':
                displayMessage('product information: our products are top notch');
                break;
            case 'support':
                displayMessage('support: How can we assist you today?');
                break;
            default:
                displayMessage('unknown action: please try again.');        
        }
    }
    function displayMessage(message) {
        const chatContainer=document.querySelector('.chat-container');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = '<p>' + message + '</p>';
        chatContainer.appendChild(newMessage);
    }; 


    document.getElementById("addButton").addEventListener('click', function() {
        document.getElementById("file-input").click();
    });
    document.getElementById("homeButton").addEventListener("click", function() {

    });
    document.getElementById("videosButton").addEventListener("click", function(){
        document.getElementById("media-container").scrollIntoView({behavior: 'smooth'});
    });

    document.getElementById("add-button").addEventListener("click", function(){
        Document.getElementById("file-input").click();
        Document.getElementById("video-input").clck();
    });
    document.getElementById("file-input").addEventListener("change", function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startswith('image/')) {
                    displayImage(file);
                }
            }
        }
    });

    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
    document.getElementById('media-container').appendChild(imageElement);
        };
        reader.readAsDataURL(file);
    }; 
/*
let mediaFiles = [];

document.getElementById('addButton').addEventListener('click', () => {
    const mediaContainer = document.getElementById('media-container');
     fileInput.type = 'file';
     fileInput.accept = 'image/*, video/*';
     fileInput.multiple = true;
     fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        for ( let i = 0; i < files.length; i++) {
            const file = files [i];
            mediaFiles.push(file);
            const mediaItem = document.createElement('div');
            mediaItem.classList.add(media-item);
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                mediaItem.appendChild(img);
            } else if (files.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                mediaItem.appendChild(video);
            }
            mediaContainer.appendChild(mediaItem);
        }
     });
     fileInput.click ();
});













    document.getElementById('homeIcon').addEventListener('click', () => {
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = '';
        for (let i = o; i < mediaFiles.length; i++){
            const file = mediaFiles [i];
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('media-item');
            if (file.typestr.startsWith('image/')) {
                img.src = URL.createObjectURL(file);
            
            }
            mediaContainer.appendChild(mediaItem);
        }
    });*/

    alert('eric kuria');
    
  
    let mediaFiles = [];

    document.getElementById('add-media-button').addEventListener('click', () => {
        const mediaContainer = document.getElementById('media-container');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,video/*';
        fileInput.multiple = true;
        fileInput.addEventListener('change', (event) => {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                mediaFiles.push(file);
                const mediaItem = document.createElement('div');
                mediaItem.classList.add('media-item');
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    mediaItem.appendChild(img);
                } else if (file.type.startsWith('video/')) {
                    const video = document.createElement('video');
                    video.src = URL.createObjectURL(file);
                    video.controls = true;
                    mediaItem.appendChild(video);
                }
                mediaContainer.appendChild(mediaItem);
            }
        });
        fileInput.click();
    });
    
    document.getElementById('home-button').addEventListener('click', () => {
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = '';
        for (let i = 0; i < mediaFiles.length; i++) {
            const file = mediaFiles[i];
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('media-item');
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                mediaItem.appendChild(img);
            }
            mediaContainer.appendChild(mediaItem);
        }
    });
    
    document.getElementById('videos-button').addEventListener('click', () => {
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = '';
        for (let i = 0; i < mediaFiles.length; i++) {
            const file = mediaFiles[i];
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('media-item');
            if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                mediaItem.appendChild(video);
            }
            mediaContainer.appendChild(mediaItem);
        }
    }); 



    const messageContainer = document.getElementById('message-container');
const newMessageBtn = document.getElementById('new-message-btn');

// Sample messages
const messages = [
    { text: 'Hello, how are you?', sender: 'Alice' },
    { text: 'I am good, thank you!', sender: 'Bob' },
    { text: 'Great!', sender: 'Alice' },
];

// Function to display messages
function displayMessages() {
    messageContainer.innerHTML = '';
    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${message.sender}:</strong> ${message.text}`;
        messageContainer.appendChild(messageElement);
    });
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle new message
function handleNewMessage() {
    const newMessageText = prompt('Enter your message:');
    if (newMessageText) {
        const newMessage = { text: newMessageText, sender: 'You' };
        messages.push(newMessage);
        displayMessages();
    }
}

// Initial display of messages
displayMessages();

// Add event listener for new message button
newMessageBtn.addEventListener('click', handleNewMessage);

// Simulate new message every 5 seconds for demonstration purposes
setInterval(() => {
    if (messages.length % 2 === 0) {
        handleNewMessage();
    }
}, 5000);


const createAccountBtn = document.getElementById('create-account-btn');
const userProfile = document.getElementById('user-profile');
const profilePic = document.getElementById('profile-pic');
const userBio = document.getElementById('user-bio');
const followerCount = document.getElementById('follower-count');
const followingCount = document.getElementById('following-count');

// Sample user data
const users = [
    { id: 1, name: 'John Doe', pic: 'john-profile-pic.jpg', bio: 'John Doe Bio', followers: 10, following: 5 },
    { id: 2, name: 'Jane Doe', pic: 'jane-profile-pic.jpg', bio: 'Jane Doe Bio', followers: 15, following: 8 },
];

// Function to display user profile
function displayUserProfile(user) {
    userProfile.style.display = 'block';
    profilePic.src = user.pic;
    userBio.textContent = user.bio;
    followerCount.textContent = user.followers;
    followingCount.textContent = user.following;
}

// Function to handle user registration
function handleUserRegistration() {
    const newUserId = users.length + 1;
    const newUser = {
        id: newUserId,
        name: prompt('Enter your name:'),
        pic: 'default-profile-pic.jpg',
        bio: prompt('Enter your bio:'),
        followers: 0,
        following: 0,
    };

    users.push(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    displayUserProfile(newUser);
}

// Add event listener for create account button
createAccountBtn.addEventListener('click', handleUserRegistration);

// Check if a user is already registered
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    displayUserProfile(currentUser);
};


/*
homeButton.addEventListener('click', () => {
    showSubButtons("home");
});

videosButton.addEventListener('click', () => {
    showSubButtons("videos");
});

function showSubButtons(section) {
    let subButtons = "";
    if (section === "home") {
        subButtons = `
        <button>friends</button>
        <button>following</button>
        <button>for you</button>
        `;
    } else if (section === "videos") {
        subButtons = `
        <button>friends</button>
        <button>following</button>
        <button>for you</button>
         `;
    
    contentDiv.innerHTML = subButtons;
};
*/





const mediaItems = document.querySelector('.media-item');

mediaItems.forEach((item) => {
    const likeButton = item.querySelector('.like-button');
    const commentButton = item.querySelector('.comment-button');
    const shareButton = item.querySelector('.share-button'); 
    const saveButton = item.querySelector('.save-button');


    likeButton.addEventListener('click', likeHandler);
    commentButton.addEventListener('click', commentHandler);
    shareButton.addEventListener('click', shareHandler);

    if (mediaItems.matches('.video')) {
        saveButton.addEventListener('click', saveHandler);
    }
});

function likeHandler() {
    console.log('liked');
}

function commentHandler() {
    console.log('commented');
}

function shareHandler() {
    console.log('shared');
}

function saveHandler() {
    console.log('saved');
}





document.getElementById('searchButton').addEventListener('click', function() {
    document.getElementById('accounts').style.display = 'block';
});

document.getElementById('accounts').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        document.getElementById('videosAndPhotos').innerHTML = 'Showing videos and photos for ' + event.target.textContent + '...';
        document.getElementById('videosAndPhotos').style.display = 'block';
    }
});
/*
const messagesDiv = document.getElementById('new-message-btn');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Sample data
const messages = [
  { name: 'User 1', text: 'Hello, how are you?' },
  { name: 'User 2', text: 'I am doing well, thank you!' },
];

// Function to render messages
function renderMessages() {
  messagesDiv.innerHTML = '';
  messages.forEach((message) => {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${message.name}:</strong> ${message.text}`;
    messagesDiv.appendChild(messageDiv);
  });
}

// Add event listener to send button
sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    const message = {
      name: 'You',
      text: messageText,
    };
    messages.push(message);
    messageInput.value = '';
    renderMessages();
  }
});

// Render initial messages
renderMessages();
*/

const notificationButton = document.getElementById('notification-button');
const notificationContainer = document.getElementById('notification-container');
const notificationList = document.getElementById('notification-list');

// Sample notification data
const notifications = [
  { type: 'message', text: 'You have a new message from John' },
  { type: 'follower', text: 'Alexander followed you' },
  { type: 'message', text: 'Hi there, I have a question for you' },
];

notificationButton.addEventListener('click', () => {
  notificationContainer.classList.toggle('hidden');
  displayNotifications();
});

function displayNotifications() {
  notifications.forEach(notification => {
    const listItem = document.createElement('li');
    listItem.textContent = `${notification.type}: ${notification.text}`;
    notificationList.appendChild(listItem);
  });
};


/*
const photoImage = document.getElementById('photo-image');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
const commentButton = document.getElementById('comment-button');
const commentContainer = document.getElementById('comment-container');
const commentList = document.getElementById('comment-list');
const shareButton = document.getElementById('share-button');

// Sample photo data
const photo = {

  likes: 0,
  comments: [
    { id: 1, text: 'Great photo!' },
    { id: 2, text: 'I love this!' },
  ],
};

// Set photo image source
photoImage.src = pictures/folder;

// Set initial like count
likeCount.textContent = photo.likes;

// Add click event listener to like button
likeButton.addEventListener('click', () => {
  photo.likes++;
  likeCount.textContent = photo.likes;
});

// Add click event listener to comment button
commentButton.addEventListener('click', () => {
  commentContainer.classList.toggle('hidden');
  displayComments();
});

// Add click event listener to share button
shareButton.addEventListener('click', () => {
  // Share the photo on WhatsApp or another platform
  // Implementation not included in this example
});

function displayComments() {
  commentList.innerHTML = '';
  photo.comments.forEach(comment => {
    const listItem = document.createElement('li');
    listItem.textContent = comment.text;
    commentList.appendChild(listItem);
  });
}
*/

/*
// Select the container for the pictures
const pictureContainer = document.querySelector('.pictures-container');

// Create the HTML structure for the picture and the buttons
const picture = document.createElement('img');
picture.src = 'path/to/image.jpg';
picture.alt = 'Description of the image';

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const shareButton = document.createElement('button');
shareButton.classList.add('share-button');
shareButton.textContent = 'Share';

const commentButton = document.createElement('button');
commentButton.classList.add('comment-button');
commentButton.textContent = 'Comment';

const likeButton = document.createElement('button');
likeButton.classList.add('like-button');
likeButton.textContent = 'Like';

// Append the buttons to the button container
buttonContainer.appendChild(shareButton);
buttonContainer.appendChild(commentButton);
buttonContainer.appendChild(likeButton);

// Append the button container to the picture container
pictureContainer.appendChild(picture);
pictureContainer.appendChild(buttonContainer);


// Select the share button
const shareButton = document.querySelector('.share-button');

// Add an event listener to the share button
shareButton.addEventListener('click', () => {
  // Handle the share button click event
});

// Select the comment button
const commentButton = document.querySelector('.comment-button');

// Add an event listener to the comment button
commentButton.addEventListener('click', () => {
  // Handle the comment button click event
});

// Select the like button
const likeButton = document.querySelector('.like-button');

// Add an event listener to the like button
likeButton.addEventListener('click', () => {
  // Handle the like button click event
});
 */



/*

// Get the template and create a function to clone and append it
const sideButtonsTemplate = document.getElementById('side-buttons-template');
const cloneSideButtons = () => sideButtonsTemplate.content.cloneNode(true);

// Function to add side buttons to a video element
const addSideButtonsToVideo = (video) => {
  // Create a wrapper for the side buttons
  const sideButtonsWrapper = document.createElement('div');
  sideButtonsWrapper.className = 'side-buttons';

  // Clone the template and append the buttons to the wrapper
  const buttons = cloneSideButtons().querySelectorAll('button');
  buttons.forEach((button) => sideButtonsWrapper.appendChild(button));

  // Append the wrapper to the video element
  video.appendChild(sideButtonsWrapper);
};

// Example: Add a video element and call the function
const newVideo = document.createElement('video');
addSideButtonsToVideo(newVideo);

*/





/*
const videoButtons = document.querySelectorAll('.video-buttons-container button');

videoButtons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const buttonType = event.target.className;
  // Add your custom functionality based on the button type
}

function handleButtonClick(event) {
    const buttonType = event.target.className;
  
    if (buttonType === 'like-button') {
      likeVideo();
    } else if (buttonType === 'share-button') {
      shareVideo();
    } else if (buttonType === 'comment-button') {
      commentOnVideo();
    }
  }
  
  function likeVideo() {
    // Implement the like functionality
    console.log('Liked the video!');
  }
  
  function shareVideo() {
    // Implement the share functionality
    console.log('Shared the video!');
  }
  
  function commentOnVideo() {
    // Implement the comment functionality
    console.log('Commented on the video!');
  }

  */ 






const imageData = [
    {
        id: 1,
        image: 'image1.jpg',
        song: 'song1.mp3',
        likes: 0,
        comments: []
    },
    {
        id: 2,
        image: 'image2.jpg',
        song: 'song2.mp3',
        likes: 0,
        comments: []
    },
    // add more images here
];

const addImageButton = document.getElementById('add-button');
const imageGrid = document.querySelector('.image-grid');

addImageButton.addEventListener('click', () => {
    const newImage = {
        id: imageData.length + 1,
        image: 'new-image.jpg',
        song: 'new-song.mp3',
        likes: 0,
        comments: []
    };
    imageData.push(newImage);
    renderImages();
});

function renderImages() {
    imageGrid.innerHTML = '';
    imageData.forEach((image) => {
        const imagePost = document.createElement('div');
        imagePost.className = 'image-post';
        imagePost.innerHTML = `
            <img src="${image.image}" alt="${image.image}">
            <div class="image-actions">
                <button class="like-button">Like (${image.likes})</button>
                <button class="comment-button">Comment</button>
                <button class="share-button">Share</button>
            </div>
            <audio src="${image.song}" controls></audio>
        `;
        imageGrid.appendChild(imagePost);
    });
}

renderImages();





/*


passsssssssssssS


*/

const user =[
    {id:1,name:'john Doe',following:true,photo:'john-Doe.jpg'},
    {id:2,name:'jane Doe',following:false,photo:'jane-Doe.jpg'},
    {id:3,name:'bob smith',following:true,photo:'bob-smith.jpg'},
];

const followingBtn = document.getElementById('following-btn');
const photoContainer = document.getElementById('photo-container');

followingBtn.addEventListener('click',() => {
    const followingPhotos = user.filter(user => user.following);
    renderPhotos(followingPhotos);
});

function renderPhotos(photos){
    photoContainer.innerHtml ="";
    photos.forEach(photos => {
        const photoElement = document.createElement('div');
        photoElement.className='photo';
        const imgElement = document.createElement('img');
        imgElement.src = `images/${photo.photo}`;
        imgElement.alt = photo.name;
        photoElement.appendChild(imgElement);
        photoContainer.appendChild(photoElement);
    });
}



/**
 for you
 */

 const userx =[
    {id:1,name:'john Doe',following:true,photo:'john-Doe.jpg'},
    {id:2,name:'jane Doe',following:false,photo:'jane-Doe.jpg'},
    {id:3,name:'bob smith',following:true,photo:'bob-smith.jpg'},
];
const allPhotosBtn = document.getElementById('following-btn');
const photoContainers = document.getElementById('photo-containers');
allPhotosBtn.addEventListener('click',() => {
    renderPhotos(users);

});
function renderPhotos(photos){
    photoContainers.innerHtml ="";
    photos.forEach(photos => {
        const photoElement = document.createElement('div');
        photoElement.className='photo';
        const imgElement = document.createElement('img');
        imgElement.src = `images/${photo.photo}`;
        imgElement.alt = photo.name;
        photoElement.appendChild(imgElement);
        photoContainers.appendChild(photoElement);
    });
}

function loadMorePhotos() {
    const containerHeight = photoContainer.offsetHeight;
    const scrollPosition = window.pageYoffset;
    const totalScroll = scrollPosition + window.innerHeight;
    if(totalScroll >= containerHeight) {
        const newUsers = users.slice(o, users.length);
        renderPhotos(newUsers);
    }
}

window.addEventListener('scroll',loadMorePhotos);
renderPhotos(users.slice(0, 12));


/**
 friends
 */


 const userz =[
    {id:1,name:'john Doe',following:true,photo:'john-Doe.jpg'},
    {id:2,name:'jane Doe',following:false,photo:'jane-Doe.jpg'},
    {id:3,name:'bob smith',following:true,photo:'bob-smith.jpg'},
];

const friendsBtn = document.getElementById('friends-btn');
const contentContainer = document.getElementById('content-container');

friendsBtn.addEventListener('click', () => {
    renderContent(users.filter(user => user.contact))
});

function renderContent(content){
    contentContainer.innerHtml ="";
    content.forEach(item => {
        const contentElement = document.createElement('div');
        contentElement.className='content';
        const textElement = document.createElement('p');
        textElement.textContent = item.content;
        imgElement.alt = photo.name;
        contentElement.appendChild(textElement);
        contentContainer.appendChild(contentElement);
    });
}



// friends video button


const friendsButton = document.getElementById('friends-button');
const videoContainer = document.getElementById('video-container');
const videoTemprate  = document.getElementById('video-temprate');

const contactList = [
    {name:'john Doe',videoUrl:'hhtps://example.com/john-doe.mp4'},
    {name:'jane Doe',videoUrl:'hhtps://example.com/jane-doe.mp4'},
];

friendsButton.addEventListener('click',() => {
    videoContainer.innerHTML = "";
    contactList.forEach((contact) =>{
        const videoCard = videoTemprate.content.cloneNode(true);
        const videoElement = videoCard.querySelector('.video-title')

        videoElement.src = contact.videoUrl;
        videoTitleElement.textContent = contact.name;
        videoContainer.appendChild(videoCard);
    });
});




// following video button
const followingButton = document.getElementById('following-button');
const video_Container = document.getElementById('video-container');
const video_Temprate = document.getElementById('video-temprate');
const followedUsers = [
    {username:'john Doe',videoUrl:'hhtps://example.com/john-doe.mp4'},
    {username:'jane Doe',videoUrl:'hhtps://example.com/jane-doe.mp4'},
];

followingButton.addEventListener('click',() =>{
    video_Container.innerHTML = "";
    followedUsers.forEach((user) => {
        const videoCard = videoTemprate.content.cloneNode(true);
        const videoElement = videoCard.querySelector('video');
        const videoTitleElement = videoCard.querySelector('.video-title');
        videoElement.src = user.videoUrl;
        videoTitleElement.textContent = user.username;
        video_Container.appendChild(videoCard);
    });
});


//for you videos button

const forYou = document.getElementById('for-everyone-button');
const video_container = document.getElementById('video-container');
const video_temprate = document.getElementById('video-temprate');

const videos = [
    {title:'video 1',url:'video1.mp4'},
    {title:'video 2',url:'video2.mp4'},
    {title:'video 3',url:'video3.mp4'},
];
forYou.addEventListener('click',() => {
    vdeo_container.innerHtml = "";
    videos.forEach(video => {
        const videoCard = videoTemprate.content.cloneNode(true);
        const videoElement = videoCard.querySelector('video');
        const videoTitleElement = videoCard.querySelector('.video-title');

        videoElement.src = video.url;
        videoTitleElement.textContent = video.title;
        video_container.appendChild(videoCard);
    });
});
