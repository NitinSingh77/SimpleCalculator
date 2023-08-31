function buttonClicked(e)
{
    let c=document.getElementById("mytext").value;
    document.getElementById("mytext").value=c+e;
}

function equal()
{
    let k=document.getElementById("mytext").value;
    document.getElementById("mytext").value=eval(k);
}

function clearResult()
{
    document.getElementById("mytext").value="";
}