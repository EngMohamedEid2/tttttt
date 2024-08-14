export function setInitialValues({initialValues,inputs}){
    var initialData = initialValues,inputs = inputs;
        initialData && (Object.keys(inputs).forEach(key => {
            if(!inputs[key].ignore){
                if(inputs[key].mapKey)
                {
                    let dataToStore =GetMapKeyData({initialData,mapKey:inputs[key].mapKey});
                    inputs[key].data = dataToStore;
                }else{
                    inputs[key].data = initialData[key];
                    if(inputs[key]?.type == 'multiSelect'){
                        initialData[key]?.length && (inputs[key].data = initialData[key].map(item=>item.id)  )
                        inputs[key].selected = initialData[key] 
                    }
                    
                    if (inputs[key].isImage) {
                        if(inputs[key].multiple){
                            inputs[key].data = initialData[key.split('_id')[0]].map(el=>el.id) || [];
                            inputs[key].selected = initialData[key.split('_id')[0]];
                        }else{
                            inputs[key].data =  initialData[key]
                            inputs[key].selected = initialData[key.split('_id')[0]];
                        }
                    }       
            
                    if (inputs[key].type && inputs[key].type=='dropdown') {
                        inputs[key].data = initialData[key]
                        inputs[key].selected = { name: initialData[key], value: initialData[key] }
                        inputs[key].displayValue = initialData[key]
                    }
                }
            }      
    }));
}


function GetMapKeyData({initialData,mapKey}){
    let mapKeyArray = mapKey.split('.')
    let dataToReturn=_.cloneDeep(initialData);
    mapKeyArray.forEach(key=>{
        dataToReturn=dataToReturn[key]
    });
    return dataToReturn
}