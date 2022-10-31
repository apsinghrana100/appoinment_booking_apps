
const submit=document.getElementById("submit");
const ul=document.getElementById('tables');
const ul1=document.getElementById('tables2');


function editdata(e){
    console.log("edit called");
}




submit.addEventListener('click',test);
function test(e)
{
 //   e.preventDefault();
    const name=document.getElementById("item1").value;
    const email=document.getElementById("item2").value;
if(name!='' || email!='')
{
    const myobj={
        name:name,
        email:email
    }

    const serilazation=JSON.stringify(myobj);
    localStorage.setItem(email,serilazation);
   // const deserilization=JSON.parse(myobj);

   Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfPeople = localStorage.getItem(key);
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
    addNewLineElement(detailsOfPeople);
    
    });


}
}

window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        addNewLineElement(user)
    })
})

function addNewLineElement(obj)
{
    let li=`<li id=${obj.email}> ${obj.name} - ${obj.email}
    <button onclick=deleteUser('${obj.email}')> Delete User </button>
    <button onclick=editUserDetails('${obj.email}','${obj.name}')>Edit User </button>
 </li>`
    
    ul.innerHTML=ul.innerHTML+li;

    let editbtn=document.createElement('input');
    // editbtn.setAttribute('type','button');
    // editbtn.setAttribute('value','edit');
    // editbtn.setAttribute('name','edit');
    // editbtn.setAttribute('id',`${obj.email}`);

    // let dltbtn=document.createElement('input');
    // dltbtn.setAttribute('type','button');
    // dltbtn.setAttribute('value','delete');
    // dltbtn.setAttribute('name','delete');
    // ul.append(editbtn);
    // ul.append(dltbtn);
    // console.log(editbtn);

}


function deleteUser(email) {
    localStorage.removeItem(email)
    removeItemFromScreen(email)
}

function removeItemFromScreen(email){
    const parentNode = document.getElementById('tables');
    const elem = document.getElementById(email)
    parentNode.removeChild(elem);
}


function editUserDetails(emailId, name){

    document.getElementById('item2').value = emailId;
    document.getElementById('item1').value = name;


    deleteUser(emailId)
 }


