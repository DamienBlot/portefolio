'use client'

import {useState} from 'react'

export default function UseCase() {
  const [accountData, setAccountData] = useState()
  const [userData, setUserData] = useState()
  
  const handleSubmit = async (event, formType) => {
    console.log("formType : ", formType)
    event.preventDefault()
    const form = event.currentTarget
    console.log("from : ", form)
    const formData = new FormData(form)
    formData.append("formType", formType)
    const formDataObject = Object.fromEntries(formData)
    console.log('formDataObject :', formDataObject)
    console.log(JSON.stringify(formDataObject))
    const data = await fetch('api/salesforce',{
      method:'POST',
      body: JSON.stringify(formDataObject)
    }).then(response => response.json())
    if(formType === "account"){
      setAccountData(data)
    }
    else if(formType === "user"){
      setUserData(data)
    }
    form.reset()
  }
  
  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center  mb-10">
      <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10">Use Case</h2>
        <p className=" col-span-2">I use a trailhead sandbox for creating a user from a form then creating a account using a form as well. And be able to check their creation in the sandbox : <a href="https://empathetic-shark-2qyjmq-dev-ed.trailblaze.lightning.force.com/" className="text-sky-500 hover:text-green-500" target="_blank">sandbox link</a></p>
      <div className="w-4/5 border-2 border-gray-900">
        <h3 className="p-10">Create user in Sandbox</h3>
        <form onSubmit={(event)=>handleSubmit(event, "user")} className="flex flex-col gap-8 px-10">
          <label>LastName : </label>
          <input type="text" name="LastName" required ></input>
          <label>Email : </label>
          <input type="email" name="Email" required></input>
          <button  type="submit" className="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
        </form>
      </div>
      <div className='w-full rounded-lg bg-cyan-600 p-8 text-white'>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
      <div className="w-4/5 border-2 border-gray-900">
        <h3 className="p-10">Create Account in Sandbox</h3>
        <form onSubmit={(event)=>handleSubmit(event, "account")} className="flex flex-col gap-8 px-10">
          <input type="text" name="Name"></input>
          <button  type="submit" className="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
        </form>
      </div>
      <div className='w-full rounded-lg bg-cyan-600 p-8 text-white'>
          <pre>{JSON.stringify(accountData, null, 2)}</pre>
      </div>
    </div>
  )};