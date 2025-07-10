export default function Button({text = "Button"}:{text: string}){
    return (
        <button type="button" className="bg-accent-500 p-3 rounded-xl font-semibold cursor-pointer hover:scale-103 active:brightness-80">{text}</button>
    )
}