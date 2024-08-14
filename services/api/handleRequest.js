export const GetHeaders = ()=>{
    return{
        Authorization:`Bearer ${useCookie('uat').value}`
    }
}
