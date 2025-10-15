
type CategoryData = {
  name: string;
  color: string;
  value: number;
};

type PieKeysProps = {
  label?: string;
  values: CategoryData[];
};


export async function PieKeys({values, label }: PieKeysProps){



     return <div className="mt-5 space-y-2 ml-5">
      <h2 className="text-black font-semibold uppercase text-sm mb-3">{label}</h2>
      {values.map((cat, key)=>{
        return  <div key={key} className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full"   style={{ backgroundColor: cat.color }} />
                  <p><span className="font-semibold">{cat.name}</span> - {cat.value}%</p>
                </div>
              </div>
      })}
        
             
    
            </div>
}