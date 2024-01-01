import articles from "../constants/articles"

const getArticles=async()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(articles);
        }, 5000);
      });
    
}

export default getArticles