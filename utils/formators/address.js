export const GetAddress = ({data})=>{
    let toSend = ``
    toSend+=`${data.street} ${data.city} ${data.state?.name},
     ${data.country?.name}`
    return toSend
}