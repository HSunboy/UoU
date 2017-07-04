<template>
    <div id="index">
    
        <canvas id="canvas" class="canvas"></canvas>
    
    </div>
</template>

<script>
    import StockChart from "status/js/stock-chart.js";
    export default {
    
        data() {
            return {
    
            };
        },
        methods: {
            draw() {
                var ctx = document.getElementById('canvas').getContext('2d');
                // 画背景
                ctx.fillStyle = '#FD0';
                ctx.fillRect(0, 0, 75, 75);
                ctx.fillStyle = '#6C0';
                ctx.fillRect(75, 0, 75, 75);
                ctx.fillStyle = '#09F';
                ctx.fillRect(0, 75, 75, 75);
                ctx.fillStyle = '#F30';
                ctx.fillRect(75, 75, 75, 75);
                ctx.fillStyle = '#FFF';
    
                // 设置透明度值
                ctx.globalAlpha = 0.2;
    
                // 画半透明圆
                for (var i = 0; i < 7; i++) {
                    ctx.beginPath();
                    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
                    ctx.fill();
                }
            }
        },
        components: {
    
        },
        mounted() {
            this.draw()
        }
    };
</script>

<style lang="sass" scoped>

.canvas{
    border:1px #cdcdcd solid;
   
    margin-left:10px;
    margin-top:10px;
    margin-right:10px;
    margin-bottom:10px;
    box-sizing:border-box;
    
  
}
   
   
     
</style>