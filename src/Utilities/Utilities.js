const getLsData=()=>{
      const storedata= localStorage.getItem('donation');
      if(storedata){
        return JSON.parse(storedata)
        
      }
      return []
    }

export default getLsData


 