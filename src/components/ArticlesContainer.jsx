import Article from "./Article"
import doce from "../assets/doce.jpeg"
import once from "../assets/once.jpeg"
import diez from '../assets/diez.jpeg'


function ArticlesContainer() {
  return (
  
  <section className="mt-6 md:flex md:flex-wrap" >

   <Article
    img= {doce}
    number="12"
    title="Semana"
    text=" Thanksgiving , Black friday"
   />

   <Article
    img= {once}
    number="11"
    title="Semana"
    text=" Semana sin descanso"/>
   
   <Article
   img= {diez}
   number="10"
   title="Semana"
   text=" Tan rápido estamos en la semana 10"/>
  
  </section>
   
  )
}

export default ArticlesContainer




