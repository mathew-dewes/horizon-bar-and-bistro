"use client"

type ButtonProps = {
  text?: string;
  danger?: boolean;
  onClick?: () => void;
};

export default function Button({text = "Hello", danger = false, onClick}:ButtonProps){

    return (
        <button onClick={onClick} className={`px-2 py-2 text-sm rounded font-semibold cursor-pointer ${danger ? "bg-red-400 hover:bg-red-600" : "bg-sky-400 hover:bg-sky-600"}`}>{text}</button>
    )
}