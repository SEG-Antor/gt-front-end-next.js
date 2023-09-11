import ParentProduct from "@/models/parentProduct";
// import SingVariation from "@/models/singleVariation";

import { connectToDb } from "@/database/database";

export const GET = async (req, res) => {
    try {
        connectToDb()
        const product = await ParentProduct.find()

        console.log("porudcts ****: ", product)
        return new Response(JSON.stringify(product), {status: 200}) 

    } catch (error) {
        console.log("error ***: ", error)
    }
}

export const POST = async (req, res) => {
    const data = await req.json()
    try{
        connectToDb()
        const newProduct = new ParentProduct(data)
        await newProduct.save()

        return new Response(JSON.stringify(newProduct), {status: 200})
    }catch(error){
        console.log("error ***: ", error)
    }
}