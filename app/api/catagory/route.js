import ParentProduct from "@/models/parentProduct";
// import SingVariation from "@/models/singleVariation";

import { connectToDb } from "@/database/database";

export const GET = async (req, res) => {
    try {
        connectToDb()
        const product = await ParentProduct.find()
        return new Response(JSON.stringify(product), {status: 200}) 

    } catch (error) {
        console.log("get error ***: ", error)
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
        console.log("post error ***: ", error)
    }
}

export const PATCH = async (req, res) => {
    const params = new URL(req.url).searchParams
    const _id = params.get("id")
    console.log(req.url)

    const data = await req.json()
    console.log(data)

    try{
        connectToDb()
        
        await ParentProduct.findByIdAndUpdate(_id, data)

        return new Response(JSON.stringify("updated"), {status: 200})
    }catch(error){
        console.log("patch error ***: ", error)
    }

}

export const DELETE = async (req, res)=> {
    const params = new URL(req.url).searchParams
    const _id = params.get("id")

    try{
        connectToDb()
        await ParentProduct.findByIdAndDelete(_id)
        return new Response(JSON.stringify("deleted"), {status: 200})
    }catch(error){
        console.log("delete error ***: ", error)
    }
}