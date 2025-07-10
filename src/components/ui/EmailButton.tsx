import Image from "next/image";

export default function EmailButton({className = ""}:{className?: string }){
    return (
         <button
                   className={`w-40 sm:w-60 flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm cursor-pointer ${className}`}
                >
                    <p className="text-xs sm:text-lg">Sign In with Email</p>
                    <Image className="w-6 h-6 ml-2" alt="email-icon" src={'/email.png'} height={100} width={100}></Image>
                </button>
    )
}