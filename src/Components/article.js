import '../Styles/article.css'
function Article( { Img, Title, Description } ) {
    return (
      <div class="Article"> 
          <img src={Img} alt='wolfgangtechnicalreport' />
          <div class="ArticleText">
            <h2> {Title} </h2>
            <p> {Description}
            </p>
          </div>
        </div>
    );
  }
  
  export default Article;
  