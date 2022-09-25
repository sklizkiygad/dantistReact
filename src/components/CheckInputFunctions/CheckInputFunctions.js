
export  const checkSecondName = (e) => {
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }

    }

    export  const checkFirstName=(e)=>{
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }
    }

    export  const checkFatherName = (e) =>{
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }
    }

    export  const checkBirthDay = (e) => {
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }

    }

    export   const checkBirthMonth = (e) => {
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }
    }

    export  const checkBirthYear=(e)=>{
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }
    }

    export  const checkPhone=(e)=>{
        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }
    }

    export const checkPassword=(e)=>{

        if(e.trim()!==''){
            return true;
        }
        else{
            return false;
        }


    }

    export const changeBirthDay=(e,setFun)=>{
        if(e.target.value.length>=2){
            e.target.value=e.target.value.substring(0,2);
        }

        if(e.target.value>=31){
            e.target.value=31;
        }

        setFun(e.target.value);
    }

export const changeBirthMonth=(e,setFun)=>{
        if(e.target.value.length>=2){
            e.target.value=e.target.value.substring(0,2);
        }
        if(e.target.value>=12){
            e.target.value=12;
        }

        setFun(e.target.value);
    }

 export const changeBirthYear=(e,setFun)=>{
        if(e.target.value.length>=4){
            e.target.value=e.target.value.substring(0,4);
        }
        if(e.target.value>=new Date().getFullYear()){
            e.target.value=new Date().getFullYear();
        }
        setFun(e.target.value);
    }

    export const checkRepeatPassword=(pass,repeatPass)=>{
        if(pass.target && repeatPass.target){
        if(pass.target.value.trim() !== '' && repeatPass.target.value.trim() !==''){
            if(pass.target.value === repeatPass.target.value)
            {
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }

}
else{
    return false;
}



    }


