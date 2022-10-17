import axios from 'axios'
// cspell:words skus

export async function getLists(){
    try {
        const {data} = await axios.get('/api/sku/list')
        if(data.stat === "OK")
            return data.skus
        else {
            console.log('request error! use local json file instead :(')
            const fileContext = await axios.get('./list.json')
            return fileContext.data.data.skus
        }
    } catch (error) {
        console.log(error)
        return []
    }
}