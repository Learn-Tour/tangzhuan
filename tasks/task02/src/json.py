import json


jsonstring = """
    [
      {
        "itemId": "591532920164",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i1/2655693039/O1CN01yuBV1Y1YJuFll3J7V_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "厨房分层置物架台面桌面调料收纳橱柜内隔层分隔板盘子双层锅架子",
        "price": 29.8,
        "ext": "800+人已购买"
      },
      {
        "itemId": "13848551459",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i2/504369715/O1CN01VDTglP2LdWUZPQ849_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "日本进口缝隙收纳架厨房置物架冰箱夹缝车可移动多层落地超窄柜",
        "price": 165,
        "ext": "47人已购买"
      },
      {
        "itemId": "17286159372",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i4/134571613/O1CN018Ko7Ss1NmnakM22lM_!!134571613.jpg_500x500q90.jpg_.webp",
        "title": "韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同款进口加厚黄铝锅",
        "price": 18.9,
        "ext": "700+人已购买"
      },
      {
        "itemId": "37493334887",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i2/95415035/TB2r4Fwn26H8KJjy0FjXXaXepXa_!!95415035.jpg_500x500q90.jpg_.webp",
        "title": "防滑不锈钢打蛋盆圆形家用商用加厚加深沙拉和面拌菜洗菜盆烘焙用",
        "price": 12,
        "ext": "200+人已购买"
      },
      {
        "itemId": "37774400634",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i1/858389760/TB2KxtnXrwrBKNjSZPcXXXpapXa_!!858389760.jpg_500x500q90.jpg_.webp",
        "title": "日本制野田珐琅白搪瓷厨房料理托盘蛋糕面包烤焗饭盘",
        "price": 44,
        "ext": "70人已购买"
      },
      {
        "itemId": "41249701225",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i1/1669047705/O1CN01nz5SKK26mwQCap7lX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "日本进口厨房双层塑料沥水篮洗菜盆碗碟果蔬清洗篮收纳筐套装家用",
        "price": 15.5,
        "ext": "800+人已购买"
      },
      {
        "itemId": "520248729925",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i1/1864085853/O1CN01whdvsn1t6iplsCLMJ_!!1864085853.jpg_500x500q90.jpg_.webp",
        "title": "象有秘密 日式陶瓷研磨碗厨房捣蒜器手动研磨器家用蒜泥碾磨芝麻",
        "price": 21.5,
        "ext": "61人已购买"
      },
      {
        "itemId": "39479763903",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i2/TB1AMlTFVXXXXazXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "长方形加厚不锈钢托盘烧烤盘子厨房餐盘双层可沥水配菜盘子餐具盘",
        "price": 12.5,
        "ext": "28人已购买"
      },
      {
        "itemId": "527896351558",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i1/451143617/O1CN01f4IuXa1cadAFilKZj_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "和风日本进口万古烧银峯釉下彩花三岛陶瓷耐高温砂锅炖锅煲汤土锅",
        "price": 98,
        "ext": "100+人已购买"
      },
      {
        "itemId": "535623932226",
        "picUrl": "https://img.alicdn.com/bao/uploaded/i4/1709727645/O1CN01rYWXJO26LSf5Dhjmv_!!0-item_pic.jpg_500x500q90.jpg_.webp",
        "title": "低价外贸出口原单成品窗帘半遮光帘阳台卧室飘窗涤亚麻布纯色简约",
        "price": 25.65,
        "ext": "200+人已购买"
      }
    ]
"""

temp="""
                .item 
                    img(src="{img}", alt="商品页面")
                    .description 
                        .title {tl}
                        .des-footer 
                            .price ￥{pr}
                            .cheat {ch}
"""

data = json.loads(jsonstring)
# print(data)
for key in data:
    print(temp.format(img=key["picUrl"],
                      tl=key["title"],
                      pr=key["price"],
                      ch=key["ext"]))