const request = require("request");


const newsKey = "7d12be6afdca4f62b59d6269a6dc8519";

const countryNews = (countryId, callback) => {
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=${countryId}&apiKey=${newsKey}&pageSize=5`;

  request({ url: newsUrl, json: true }, (err, res) => {
    if (err) {
      callback("Unable to  connect to  Search City Service");
    } else if (res.body.code) {
      // console.log(res.body.code)
      callback(res.body.message);
    }
    if (res.body.articles.length === 0) {
      callback("There is no News for that country...!");
    } else {
      const articles = res.body.articles;

      const miniArticles = articles.map(article => {
        return {
          source: article.source.name,
          title: article.title,
          description: article.description,
          author: article.author
        };
      });


      callback(undefined,{ miniArticles,
         readable(){
           this.miniArticles.map(article=>{
             console.log(`${article.title}`)
             console.log(``)
             console.log(`${article.description}`)
             console.log(``)
             console.log(`${article.source}`)
             console.log(`${article.author?article.author:''}`)
             console.log(``)
            })
         }
      });
    }
  });
};

module.exports=countryNews