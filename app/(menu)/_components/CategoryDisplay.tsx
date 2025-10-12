import Link from "next/link"
import Image from "next/image"

export default function CategoryDisplay({category}:{category: string}){
    return (
         <div>
              <h1 className="mt-10 font-bold text-center text-2xl">Category Display:</h1>
            <div className="md:grid-cols-5 sm:grid-cols-3 gap-10 mt-10 grid grid-cols-2 justify-items-center" >
                {['Beer', 'Cocktails' ,'Spirits','Food', 'Dessert' ].map((cat, i)=>{
                    return (
                        <div key={i}>
                            <Link scroll={false} href={`?category=${cat}`}>
                             <Image 
                             className={`duration-300 ease-in-out rounded-full hover:scale-110 shadow-2xl hover:shadow-sky-300/20 
                                hover:border-sky-300 cursor-pointer h-30 w-30 object-cover border-3 border-amber-50 focus: focus:scale-95
                                ${category === cat ? 'border-sky-300 hover:shadow-sky-300/20 scale-110': ""}`}  
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