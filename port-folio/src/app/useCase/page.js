// import salesforceLogin from "../(components)/salesforceLogin"

export default async function UseCase() { 
  async function salesforceLogin(){
    console.log("salesforceLogin")
    const body = "grant_type=paswword&username=d.blot.28@empathetic-shark-2qyjmq.com&password=DaminaTest1!zsEcbFTQQGm7eVBZGgUmVErlC&client_id=3MVG9PwZx9R6_UrdH1appf7f0_630iuB3YCiTkLXu70cgvoDvGIgHuf7IkQG9E0rk0ty5TncO5cy50cnq2zxZ&client_secret=26559BBEFB72034836A2903F114AFDF1CDC7493F807426CEC288D5F54DA02941"
    const response = await fetch('https://login.salesforce.com/services/oauth2/token', {
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        },
        method: "post",
        body: "grant_type=password&username=d.blot.28@empathetic-shark-2qyjmq.com&password=DaminaTest1!9XAvc8zkTHtdkenY9fzzejKN&client_id=3MVG9PwZx9R6_UrdH1appf7f0_630iuB3YCiTkLXu70cgvoDvGIgHuf7IkQG9E0rk0ty5TncO5cy50cnq2zxZ&client_secret=26559BBEFB72034836A2903F114AFDF1CDC7493F807426CEC288D5F54DA02941",
    })
    const jsonResponse = await response.json()
    console.log("jsonResponse :", jsonResponse)
    console.log("jsonResponse :", jsonResponse.instance_url)
    console.log("jsonResponse :", jsonResponse.access_token)
    return jsonResponse
  }
  
  // async function createUser(event){
  //   event.preventDefault()
  //   console.log("createUser", createUser)
    
  //   const formData = new FormData(event.target)
  //   console.log("formdata : ", formData)
  //   const response = await fetch(`${data.instanceurl}/services/data/v56.0/sobjects/User`, {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   const jsonResponse = await response.json()
  //   console.log("jsonResponse :",jsonResponse)
  // }
  
  // async function createAccount(event){
  //   event.preventDefault()
  //   console.log("createAccount")
  //   const data = await salesforceLogin()
  //   const formData = new FormData(event.target)
  //   console.log("formdata : ", formData)
  //   const response = await fetch(`${data.instanceurl}/services/data/v56.0/sobjects/Account`, {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   const jsonResponse = await response.json()
  //   console.log("jsonResponse :",jsonResponse)
  // }
  
  const data = await salesforceLogin()
  
  return (
    <div className="grid grid-cols-2 gap-8 justify-items-center  mb-10">
      <h2 className=" col-span-2 text-5xl justify-self-center mt-10 mb-10">Use Case</h2>
        <p className=" col-span-2">I use a trailhead sandbox for creating a user from a form then creating a account using a form as well. And be able to check their creation in the sandbox : <a href="https://empathetic-shark-2qyjmq-dev-ed.trailblaze.lightning.force.com/" className="text-sky-500 hover:text-green-500" target="_blank">sandbox link</a></p>
      {/* <div className="border-2 border-gray-900">
        <h3 className="p-10">Create user in Sandbox</h3>
        <form onSubmit={createUser} className="flex flex-col gap-8 px-10">
          <input type="text" name="Name"></input>
          <input input type="email" name="Name"></input>
          <button  type="submit" className="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
        </form>
      </div>
      <div className="border-2 border-gray-900">
        <h3 className="p-10">Create Account in Sandbox</h3>
        <form onSubmit={createAccount} className="flex flex-col gap-8 px-10">
          <input type="text" name="Name"></input>
          <button  type="submit" className="w-32 inline-flex items-center ml-5 mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
        </form> */}
      {/* </div> */}
    </div>
  )};