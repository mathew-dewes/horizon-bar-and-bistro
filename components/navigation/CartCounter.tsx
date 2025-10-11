import { getUserId } from "@/server/auth/session";
import prisma from "@/server/db/prisma";

export default async function CartCouter() {

    const userId = await getUserId();
    if (!userId) return




    const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { cartItems: true },
    });




    const totalQuantity = cart?.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    return <span className='absolute -top-2 -right-3 text-sm text-green-500'>{totalQuantity == 0 ? "" : totalQuantity}</span>
}