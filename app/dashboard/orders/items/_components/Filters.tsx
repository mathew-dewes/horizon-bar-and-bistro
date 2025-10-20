


import Form from 'next/form'

// import { getCommunityNames } from '@/server/queries/community';
import DropDown from './Dropdown';
import { OrderStatus } from '@prisma/client';





export default async function Filters({filter, sort}:{filter: string, sort?: string}){

const statues = ["Pending", "Ready", "Complete"]

    

    return (
        <Form action={""} className="flex flex-col lg:flex-row gap-5 sm:items-center mb-5">
            <div className='flex gap-5 sm:gap-10'>
                <div>
                    <p className='mb-2'>Status</p>
   <DropDown type='status' options={statues} defaultValue={filter ?? "pending"}/>
                </div>

                <div>
                    <p className='mb-2'>Sort by</p>
   <DropDown type='sort' options={statues} defaultValue={sort ?? "Most Recent"}/>
                </div>
    


            
               
            </div>
          

        
         
         
        </Form>
    )
}

