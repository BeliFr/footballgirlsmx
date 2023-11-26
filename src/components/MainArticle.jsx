import banner from "../assets/banner.jpeg"
import bannerdesktop from "../assets/bannerdesktop.jpeg"

const MainArticle = () => {      
  return (
   <section className="mb-12">
    <picture>
      <source media="(max-width:640px" srcSet= {banner}/>
      <source media="(min-width:641px" srcSet={bannerdesktop} />
      <img src={banner} alt="logo mobile" />
    </picture>

    <div className="sm:flex">
      <div className="flex-1 py-6">
    <h2 className="text-Pinky text-[40px] font-bold sm:text-[58px] leading-none">Football Girls Mx</h2>
    </div>

    <div className="flex-1 sm:pt-7">
    <p className="text-[16px] mb-10 sm:text-[18px]">El football americano es nuestro deporte favorito. 
      Desde college hasta NFL, nos encanta compartir nuestra pasión con los fans. 
      Somos las #FootballGirlsMx.🏈 </p>
    <button className="bg-Pinky w-[185px] uppercase text-white hover:bg-black">Conoce más</button>
    </div>

    </div>

   </section>
  )
}

export default MainArticle
