
const submit=document.getElementById("submit");
const ul=document.getElementById('tables');
const ul1=document.getElementById('tables2');



submit.addEventListener('click',test);
function test(e)
{
    const name=document.getElementById("item1").value;
    const email=document.getElementById("item2").value;

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

function addNewLineElement(obj)
{
    let li=`<li> ${obj.name},${obj.email} </li>`
    ul.innerHTML=ul.innerHTML+li;
    let editbtn=document.createElement('input');
    editbtn.setAttribute('type','button');
    editbtn.setAttribute('value','edit');

    let dltbtn=document.createElement('input');
    dltbtn.setAttribute('type','button');
    dltbtn.setAttribute('value','delete');
   // const textnode=document.createTextNode(detailsOfPeople.name);
    ul.append(editbtn);
    ul.append(dltbtn);


}