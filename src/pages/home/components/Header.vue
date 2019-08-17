<template>
    <div>
        <header>
            <div class="left">
                <div class="iconfont back-btn">&#xe624;</div>
            </div>
            <div class="content">
                <span class="iconfont">&#xe632;</span>
                请输入内容
            </div>
            <div class="right">
                <span class="iconfont down-btn">&#xe64a;</span>
                城市
            </div>
        </header>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus" scoped> 
@import '~styles/varibles.styl'
        header 
            height: .86rem
            display: flex
            background-color: $bgnColor
            line-height:  .86rem
            color: #fff
         .left
            width:  .64rem
            float:  left 
            .back-btn 
                text-align: crnter
                font-size: .4rem
            
        .content 
            flex:  1
            line-height: .64rem
            color: #ccc
            paddig-left: .2rem
            height:  .64rem
            margin-left: .2rem
            border-radius:  .25rem
            background-color:  #fff
            margin-top : .12rem          
        .right
            float:  right 
            width:  1.24rem
            text-align: center
            .down-btn
                     font-size: .2rem
</style>