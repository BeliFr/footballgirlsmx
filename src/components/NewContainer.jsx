import NewArticle from "./NewArticle";


function NewContainer() {
  return (
   <aside className="bg-Grays text-white py-[28px] px-[20px] lg:h-[600px]">
    <h1 className="text-Tittles font-bold text-4xl">New</h1>
    <NewArticle/>
    <NewArticle/>
    <NewArticle/>
   </aside>
  )
}

export default NewContainer
