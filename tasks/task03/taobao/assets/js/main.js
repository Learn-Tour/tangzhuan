// 请求数据
async function getList() {
    try {
        const response = await axios.get('https://learn.91tangzhuan.com/frontend-basics/lesson-03/data/skus.json');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return -1;
    }
}

// 初始化函数
// data 为数组包含了对象
async function init() {
    let data = await getList();
    if (data == -1) {
        alert("服务器错误！");
        return;
    }
    for (const el of data) {
        _build_list(el, ".main");
    }

}

function _create_element(type, className, id, context) {
    const el = document.createElement(type);
    if (className != null)
        el.setAttribute('class', className);
    if (id != null)
        el.setAttribute("id", id);
    if (context != null)
        el.textContent = context;
    return el;
}

function _build_list(el, mountPoint) {
    const item = _create_element('div', 'item', el.itemId);

    const img = _create_element('img');
    img.src = el.picUrl;
    img.alt = el.title;

    const des = _create_element('div', "description");
    const title = _create_element('div', 'title',null,el.title);
    const des_footer = _create_element('div', "des-footer");
    des.appendChild(title);
    des.appendChild(des_footer);
    const price = _create_element('div', "price",null,el.price)
    const cheat = _create_element('div', "cheat",null,el.ext)
    des_footer.appendChild(price);
    des_footer.appendChild(cheat);

    // 加入 item
    item.appendChild(img);
    item.appendChild(des);

    // 根节点挂载
    const root = document.querySelector(mountPoint);
    root.appendChild(item);
    console.log("挂载",el.title,"到",mountPoint);
}

document.addEventListener('DOMContentLoaded', init);
