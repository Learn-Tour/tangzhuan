
axios.get('https://learn.91tangzhuan.com/frontend-basics/lesson-03/data/albums.json')
  .then(function (response) {
    // handle success
    console.log(response);
    if(response.status == 200){
        response.data.forEach(item =>{
            _buildAlbum(item,"main");
        })
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("finally！")
  });

function _buildAlbum(album,mountPoint){
    // 根节点
    const node = document.createElement("div");
    node.setAttribute("class","album");
    // 专辑图片
    const img = document.createElement("img");
    img.src = album.photo;
    img.alt = album.name;
   

    // 歌名
    const name = document.createElement("div");
    name.textContent = album.name;
    name.setAttribute("class","name");
    
    
    // 歌手等信息
    const info = document.createElement("div");
    info.setAttribute("class","info")
    const author = document.createElement("div");
    const date = document.createElement("div");
    author.className = "author";
    author.textContent = album.singer;
    date.className = "time";
    date.textContent = album.time;

    info.appendChild(author);
    info.appendChild(date);

    // 添加至 node
    node.appendChild(img);
    node.appendChild(name);
    node.appendChild(info);
    node.id = album.id;

    const root = document.querySelector(mountPoint);
    console.log("挂载歌曲", album.name ,"到",mountPoint);
    root.appendChild(node);
}