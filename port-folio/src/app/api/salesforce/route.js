import SalesforceApi from "./salesforceApi";
import { NextResponse } from "next/server";

export async function POST(req){
    const data = await req.json()
    console.log('Name : ', data.Name)
    console.log('formType : ', data.formType)
    const login = await SalesforceApi.salesforceLogin()
    console.log('login :', login)
    let createdObject
    if(data.formType === 'account'){
        delete data.formType;
        createdObject = await SalesforceApi.createAccount(login, data)
    }
    else if(data.formType === 'user'){
        delete data.formType;
        createdObject = await SalesforceApi.createUser(login, data)
    }
    console.log('createdObject :', createdObject)
    return NextResponse.json(createdObject)
}



  