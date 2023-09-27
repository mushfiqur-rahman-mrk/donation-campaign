const getLsData=()=>{
      const storedata= localStorage.getItem('donation');
      const cards=JSON.parse(storedata)
        return cards;
      
    }

export default getLsData