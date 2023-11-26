



function Article({img, number, title, text}) {
  return (
    <article className="flex h-[180px] md:w-[343px] md:flex-grow">
        <div className="w-[120px]  flex-none]">
            <img src={img} alt="semana"/>
        </div>

        <div className="pl-6 ">
            <p className="text-Tittles font-bold text-3xl mb-[18px]"> {number}</p>
            <h2 className="font-bold mb-[18px] text-[22px] text-Tittles
             hover:text-PinkyNumber cursor-pointer sm:text-[32px]">{title}</h2>
            <p className="text-[16px] text-Grays sm:text-[24px]" >{text} </p>
        </div>

    </article>
  )
}

export default Article