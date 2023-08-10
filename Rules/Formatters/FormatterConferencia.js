/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterConferencia(clientAPI) {
    const oData=clientAPI.binding;
    let color="";

    if(oData.CONFERENCIA==="Este"){
        color="Red";
    }else{
        color="Green"
    }
    return color;
}
