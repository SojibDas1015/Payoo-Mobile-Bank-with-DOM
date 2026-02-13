function getInputValue(id){
    const value = document.getElementById(id).value;
    const convertValue = parseInt(value);
    return convertValue;
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseInt(value);
    return convertValue;
}

function getSetInnerTextByIdValue(id, value)
{
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}