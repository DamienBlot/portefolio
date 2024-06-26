class SalesforceApi {
    static async salesforceLogin(){
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
    
    static async createAccount(login, data){
        console.log("createAccount")
        console.log("login : ", login)
        console.log("data : ", data)
        const response = await fetch(`${login.instance_url}/services/data/v56.0/sobjects/Account`, {
            method: 'POST',
            headers :{
                "Authorization" : `Bearer ${login.access_token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const jsonResponse = await response.json()
        console.log("jsonResponse :",jsonResponse)
        return jsonResponse
    }
    static async createUser(login, data){
    console.log("createUser")
    console.log("login", login)
    console.log("data", data)
    data.Username = data.Email
    data.Alias = "standt"
    data.TimeZoneSidKey = "America/Los_Angeles"
    data.LocaleSidKey = "en_US"
    data.EmailEncodingKey = "UTF-8"
    data.ProfileId = "00eWU000003lnxJYAQ"
    data.LanguageLocaleKey = "en_US"
    console.log("Username : ", data.Username)
    const response = await fetch(`${login.instance_url}/services/data/v56.0/sobjects/User`, {
        method: 'POST',
        headers :{
            "Authorization" : `Bearer ${login.access_token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    const jsonResponse = await response.json()
    console.log("jsonResponse :",jsonResponse)
    return jsonResponse
}
}

module.exports = SalesforceApi