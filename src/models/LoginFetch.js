export const GetCall=(cb)=>
{    
    fetch('http://localhost:8000/api/jdata',{
        method:'GET',
        headers:{
          
            'Content-Type':'application/json'
        }
    })
    .then(resp =>resp.json())
    .then((result)=>{
//console.log(result);
        cb(result);
    })
}

export const SignUpCall=(data,cb)=>
{
    fetch('http://localhost:8000/api/signup',{
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