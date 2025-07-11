export default function BeachBanner({text}:{text: string}){
    return (
           <div className="bg-[url('/beach.jpg')] h-50 bg-cover bg-center p-8 mb-2">
         <h1 className="text-2xl font-medium">{text}</h1>
      </div>
    )
}

