let all


let getdata=()=>{
    fetch('http://localhost:3000/Student').then((res)=>res.json()).then((data)=>
    {
         all=data
        let student=''
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            student+=`
            <div class='dev'>
            <img src=${element.image} alt='' width='300px' height='400px'/>
            <h3>Name: ${element.name}</h3>
            <h3>Roll Number: ${element.Roll}</h3>
            <h4>College Name: ${element.Roll}</h4>
            <button value=${element.id} id='delete'>Delete</button>
            <button value=${element.id} id='edit'>Edit</button>
            </div>
            `
        }
        document.getElementById('student').innerHTML=student
    }
    )
}
getdata()
let addproduct=()=>{
    document.getElementById('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        let name=document.getElementById('name').value
        let Roll=document.getElementById('Roll').value
        let image=document.getElementById('image').value
        let college=document.getElementById('college').value
        let data={
            name,Roll,image,college
        }
        let option={
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }
        fetch('http://localhost:3000/student',option).then((res)=>getdata())
    })
}
addproduct()



let deleteproduct=()=>{
document.addEventListener('click', function (e) {

    if (e.target && e.target.id=='delete'){
        let id = e.target.value
        let option={
            method:'DELETE',
            headers:{
                "Content-Type":"Application/json"
            }
        }
        fetch(`http://localhost:3000/Student/${id}`,option).then(()=>getdata())
    }
    
})
}
deleteproduct()



let updatedata=()=>{
    let id
document.addEventListener('click',(e)=>{
    if(e.target && e.target.id=="edit"){
        let tar=e.target.value
        let data=all[tar-1]
        id=data.id
console.log(all[tar-1])
document.getElementById('image1').value=data.image
document.getElementById('name1').value=data.name
document.getElementById('Roll1').value=data.Roll
document.getElementById('college1').value=data.college
document.getElementById('editbtn').value=data.id
    }
})

document.getElementById('formupdate').addEventListener('submit',(e)=>{
    e.preventDefault()
        let name=document.getElementById('name1').value
        let Roll=document.getElementById('Roll1').value
        let image=document.getElementById('image1').value
        let college=document.getElementById('college1').value
        let data={
            name,Roll,image,college
        }
        let option={
            method:'PATCH',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }
        fetch(`http://localhost:3000/student/${id}`,option).then(()=>getdata())
    
})

}
updatedata()