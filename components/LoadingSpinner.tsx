export default function LoadingSpinner({text}:{text: string}){
return (
    <div className="flex items-center py-10 gap-3">
      <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
      <p>Loading {text || "data"}...</p>
    </div>
  );

}