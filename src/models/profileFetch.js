export const adminProfile=(data,cb)=>
{    
    fetch('http://localhost:8000/api/adminProfile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then (resp=>resp.json())
    .then((result)=>{
        cb(result);
    })
}

export const updateEmpProfile=(data,cb)=>
{    
    fetch('http://localhost:8000/api/updateEmpProfile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then (resp=>resp.json())
    .then((result)=>{
        cb(result);
    })
}

export const FetchEmpProfile=(data,cb)=>
{    
    fetch('http://localhost:8000/api/fetchEmpProfile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then (resp=>resp.json())
    .then((result)=>{
        cb(result);
    })
}