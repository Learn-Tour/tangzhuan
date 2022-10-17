import axios from 'axios'

/**
 * 获取地区列表
 * @returns
 */
export async function get_areas() {
    try {
        // 直接拿到里面的 data 对象 {data: xxx}
        const {data} = await axios.get('/api/album/areas')
        console.log("地区：",data)
        if (data.stat === 'OK') return data.data.areas
    } catch (error) {
        console.error(error)
    }
    return []
}

/**
 * 获取专辑列表
 * @param area 地区id
 * @returns
 */
export async function get_albums(area) {
  try {
    const {data}  = await axios.get('/api/album/list?area=' + area)
    if (data.stat === 'OK') return data.data.albums
  } catch (error) {
    console.error(error)
  }
  return []
}