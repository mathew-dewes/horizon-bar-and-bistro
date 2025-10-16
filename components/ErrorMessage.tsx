export default function ErrorMessage({message, color = "red"}:
    {message?: string, color?: string }
){
    return <p className={`mt-2 text-${color}-500 text-sm`}>{message}</p>
}