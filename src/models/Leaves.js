export const ApplyLeaveReq=(data,cb)=>
{    
    fetch('http://localhost:8000/api/leaveApply',{
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