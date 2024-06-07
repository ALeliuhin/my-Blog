function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var articles = document.getElementsByTagName("article");
    for (var i = 0; i < articles.length; i++) {
        var title = articles[i].querySelector(".ihead").innerText.toLowerCase(); 
        if (title.includes(searchInput)) {
            articles[i].style.display = "block";
        } else {
            articles[i].style.display = "none";
        }
    }
}