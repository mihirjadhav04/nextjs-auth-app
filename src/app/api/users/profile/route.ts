import { dbconnect } from "@/db/dbconfig";
import User from "@/models/user.model"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { getDataFromToken } from "@/helpers/getDataFromToken";


dbconnect()


export async function POST(request: NextRequest){
    //extract data from token.
    const userId = await getDataFromToken(request)
    const user = User.findOne({_id: userId}).select("-password")
    
    if(!user){
        return NextResponse.json({
            error: "User not found!",
            success: false
        },{status: 400})
    }


    return NextResponse.json({
        message: "User Found!",
        data: user
    })

}