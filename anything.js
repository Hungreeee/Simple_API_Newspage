var newsIndex = 0;
function addMoreNews(){
    var elementExists = document.getElementById("text");
    if(elementExists != null){
      document.getElementById("text").remove();
    }
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < 15; i++) {
            var newsIndi = data[newsIndex++];
            var sourceUrl = "https://hacker-news.firebaseio.com/v0/item/";
            var newsUrl = sourceUrl + newsIndi + ".json";
            fetch(newsUrl)
            .then(response => response.json())
            .then(data =>{
                var newsContainer = document.createElement("div");
                var newsTitle = document.createElement('a');
                var newsA = document.createElement("div");
                var newsAuthor = "By " + data.by;
                newsTitle.innerHTML = data.title;
                newsTitle.href = data.url;
                newsA.append(newsAuthor);
                newsA.classList.add("auName");
                newsContainer.classList.add("container_style");
                newsContainer.append(newsTitle);
                newsContainer.append(newsA);
                document.getElementById("scroller").append(newsContainer);
            });
        }
    });
}