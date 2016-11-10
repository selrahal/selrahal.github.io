var posts = document.getElementsByTagName("a");
for (var i = 0; i < posts.length; i++) {
 posts[i].style.animationName = "slidein"
 posts[i].style.animationDelay = (i*5) + "0ms"
}
