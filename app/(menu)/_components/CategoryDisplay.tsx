import Link from "next/link"
import Image from "next/image"

export default function CategoryDisplay({category}:{category: string}){
    return (
         <div className="">
              <h1 className="font-bold text-center text-2xl">Categories:</h1>
            <div className=" mt-10 
          flex gap-6 overflow-x-auto px-5 scrollbar-hide scroll-smooth
         md:overflow-visible md:justify-center md:gap-10
          justify-items-center" >
                {['Beer', 'Cocktails' ,'Spirits','Food', 'Dessert' ].map((cat, i)=>{
                    return (
                        <div className="flex-shrink-0 text-center mt-2 mb-3" key={i}>
                            <Link  scroll={false} href={`?category=${cat}`}>
                             <Image 
                             className={`duration-300 ease-in-out rounded-full hover:scale-110 shadow-2xl hover:shadow-sky-300/20
                                hover:border-sky-300 cursor-pointer h-30 w-30 object-cover border-3 border-amber-50 focus: focus:scale-95
                                  ${category === cat ? 'border-sky-300 scale-110' : ''}`}  
                             height={100} 
                             width={100} 
                             alt="categorie" 
                             src={`/category-images/${cat}.jpg`}></Image>
                            <p className={`text-center mt-2 font-medium ${category === cat ? 'font-semibold text-sky-300': ""}`}>{cat}</p>
                            </Link>
                            
                        </div>
                    ) 
                   
                })}
                          </div>
        </div>
    )
}