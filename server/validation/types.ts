import { OrderStatus } from "@prisma/client"

export type Orders = {
    orders: {
        createdAt: Date,
        orderNumber: number,
        tableNumber: string,
        status: OrderStatus,
        totalItems: number,
        user: {
            name: string,
        }
    }[],
    filter: string
}


export type OrderItems = {
        orders: {
        createdAt: Date,
        orderNumber: number,
        tableNumber: string,
        status: OrderStatus,
        totalItems: number,
        user: {
            name: string,
        }
    }[],
    filter: string,
    orderItems:{
        quantity: number,
        ready: boolean,
        product:{
            name:string,
            
        }
    }
}




// export async function getOrdersItems() {
//   return await prisma.order.findMany({
//     select:{
//       createdAt:true,
//       orderNumber: true,
//       tableNumber: true,
//       totalItems:true,
//       status: true,
//       orderItems:{
//         select:{
//           quantity: true,
//           ready: true,
//           product:{
//             select:{
//               name: true
//             }
//           }
//         }
//       },
//       user:{
//         select:{
//           name: true,
          
//         }
//       },
      
      
      
//     },
//   })


// };