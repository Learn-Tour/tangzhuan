import axios from 'axios'
// cspell:words skus

export async function getLists() {
    try {
        const { data } = await axios.get('/api/sku/list')
        if (data.stat === "OK")
            return data.skus
        else {
            return localList()
        }
    } catch (error) {
        console.log(error)
        return localList()
    }
}

async function localList() {
    console.log('request error! use local json file instead :(')
    const fileContext = await axios.get('./list.json')
    return fileContext.data.data.skus
}