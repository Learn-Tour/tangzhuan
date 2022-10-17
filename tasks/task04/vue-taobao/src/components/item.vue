<template lang="pug">
.item 
    img(:src="item.picUrl", alt="商品页面")
    .description 
        .title {{ item.title }}
        .des-footer 
            .price ￥ {{ item.price }}
            .cheat {{ item.ext }}
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {
                picUrl: "https://img.alicdn.com/bao/uploaded/i1/2655693039/O1CN01yuBV1Y1YJuFll3J7V_!!0-item_pic.jpg_500x500q90.jpg_.webp",
                title: "厨房分层置物架台面桌面调料收纳橱柜内隔层分隔板盘子双层锅架子",
                price: "29.8",
                ext: "800+人已购买",
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.item {
    // 商品文图横向排列
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    // 突出背景
    background-color: whitesmoke;
    border-radius: 19px;
    overflow: hidden; // 隐藏突出部分
    margin: 0 0 10px 0; // 项目间的底部间隔

    img {
        background-color: orange;
        width: 130px;
    }

    >.description {
        // 直接子代选择
        // 文字纵向排列，中间隔开
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: content;

        .des-footer {
            // 价格和骗人信息横向排列并中间隔开
            display: flex;
            flex-direction: row;
            // 主轴底部对齐
            align-items: flex-end;
            justify-content: space-between;

            .price {
                color: darkgoldenrod;
                font-size: 21px;
                font-weight: 600;
            }

            .cheat {
                color: gray;
            }
        }
    }
}
</style>