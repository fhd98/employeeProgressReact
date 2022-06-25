export const TaskFetch=(data,cb)=>
{    
    fetch('http://localhost:8000/api/taskView',{
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

export const TaskCompletion=(data,cb)=>
{    
    fetch('http://localhost:8000/api/taskCompletion',{
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

export const TaskProgress=(data,cb)=>
{    
    fetch('http://localhost:8000/api/taskProgress',{
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