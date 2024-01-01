import articles from "../constants/articles"

const getArticleById=(id,setArticle,setIsFavourite)=>{
    const article=articles.find(a=>a.id===id)
    setTimeout(()=>{
        setArticle(article)
        setIsFavourite(article.isFavourite)
    },2000)
}
export default getArticleById