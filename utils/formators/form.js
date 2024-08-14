
export function convertInputData({data,removeKeys}){
    let objToSend = JSON.parse(JSON.stringify(data));
    recursiveSet({currentObj:objToSend})
    Object.keys(objToSend).forEach(key=>{
      if(typeof objToSend[key]=='object' && !Array.isArray(objToSend[key])){
        delete objToSend[key]
      }else if(Array.isArray(objToSend[key]) && !objToSend[key].length){
        delete objToSend[key]
      }
       if(!objToSend[key])
       delete objToSend[key]
    })
    removeKeys?.forEach(key=>key in objToSend && delete objToSend[key])
    return objToSend
  }
  
  function recursiveSet({currentObj}){
    if(Array.isArray(currentObj)){
      currentObj.forEach(item=>{
        recursiveSet({currentObj:item})
      })
    }else if(typeof currentObj === 'object' && currentObj !== null){
      Object.keys(currentObj).forEach(key=>{
        if(currentObj[key] !=null){
          if(typeof currentObj[key] === 'object' && !Array.isArray(currentObj[key]) &&  'data' in currentObj[key]){
            if(key=='meta_tags' && Array.isArray(currentObj[key])){
              currentObj[key] =currentObj[key]['data'].join() 
            }else{
              currentObj[key] =currentObj[key]['data'] 
            }
          }else{
            delete currentObj[key];
          }
          recursiveSet({currentObj:currentObj[key]});
        }else{
          delete currentObj[key];
        }
      })
    }
  }
  