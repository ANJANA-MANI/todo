data=[];


function add_task()
{
    content=document.getElementById("sample_data")
    console.log(content);
element=document.getElementById("ip")
data.push(element.value);
console.log(data);

//op_element=document.getElementById("op")
//console.log(op_element);


for(i of data)
{
   //content.innerHTML+="<p>"+i+"</p>"
   content.innerHTML+="<P>"+i+"<i>edit</i><i></i>del</i></P>"
}
//op_element.textContent=data;
//op_button=document.getElementsByClassName("edit");
//console.log(op_button);
//[...op_button].map(i=>i.style.display="block");
}
function detele()
{

}