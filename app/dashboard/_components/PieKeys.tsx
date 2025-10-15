export async function PieKeys({type: string}:{
  type?: string


  
}){
    const categories = [
    { name: "Spirits", color: "#DC3545" }, // red
    { name: "Cocktails", color: "#FFC107" }, //yellow
    { name: "Beer", color:"#FF9F40" }, //orange
    { name: "Dessert", color: "#6610F2" },
    { name: "Food", color: "#28A745"},
  ];

    const products = [
    { name: "Spirits", color: "#DC3545" }, // red
    { name: "Cocktails", color: "#FFC107" }, //yellow
    { name: "Beer", color:"#FF9F40" }, //orange
    { name: "Dessert", color: "#6610F2" },
    { name: "Food", color: "#28A745"},
  ];

     return <div className="mt-2 space-y-2 ml-5">
      <h2 className="text-black font-semibold uppercase text-sm">Categories</h2>
      {categories.map((cat, key)=>{
        return  <div key={key} className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full"   style={{ backgroundColor: cat.color }} />
                  <span>{cat.name}</span>
                </div>
              </div>
      })}
        
             
    
            </div>
}