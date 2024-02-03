const post_btn= document.querySelector('.post-btn');
const input_text= document.querySelector('.input');
let posted_tweets= document.querySelector('.posted-tweets');

post_btn.addEventListener('click',()=>{
    let text= input_text.value;
    generateTweet(text);
});

function generateTweet(task){
    let tweetcont= document.createElement("div");
    tweetcont.className="existing-tweet";
    tweetcont.innerHTML=`<div class="tweet-person">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" width="55" height="55">
    <p> joannegraham123</p>
</div>
<p class="written-text">${task}</p>`;
    posted_tweets.appendChild(tweetcont);
}