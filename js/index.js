const displayData = (data)=>{
    result.value += data
}

const calclear = () =>{
    result.value = ''
}

const calresult = ()=>{
    if(result.value!=''){
        try{
            result.value = eval(result.value)
        }
        catch{
            result.value = 'Error ! ! !'
        }
    }
}