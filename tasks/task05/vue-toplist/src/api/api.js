import axios from "axios";

// cspell:words demoapi

/**
 * 获取音乐列表
 */
export async function listTops() {
    const { data } = await axios.get('/api/top/list')
    console.log(data)
    if (data.stat === 'OK') return data.data.tops
    return []
}