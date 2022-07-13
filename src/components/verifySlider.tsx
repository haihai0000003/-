import React, { useRef } from "react";
import img from '@/static/img/img1.jpg';
type IVertifyProp = {
    width:number,
    height:number,
    l:number,
    r:number,
    visible:boolean,
}

const VerSlid: React.FC<IVertifyProp> = ({
    width = 320,
    height = 160,
    l = 42,
    r = 9,
    visible = true
}) => {
    const canvasEl = useRef(null);

    
    const drawPath  = (ctx:any, x:number, y:number, operation: 'fill' | 'clip') => {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.arc(x + l / 2, y - r + 2, r, 0.72 * Math.PI, 2.26 * Math.PI)
        ctx.lineTo(x + l, y)
        ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * Math.PI, 2.78 * Math.PI)
        ctx.lineTo(x + l, y + l)
        ctx.lineTo(x, y + l)
        // anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
        ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * Math.PI, 1.24 * Math.PI, true)
        ctx.lineTo(x, y)
        ctx.lineWidth = 2
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.stroke()
        ctx.globalCompositeOperation = 'destination-over'
        // 判断是填充还是裁切, 裁切主要用于生成图案滑块
        operation === 'fill'? ctx.fill() : ctx.clip()
    }

    const canvasCtx = canvasEl.current.getContext('2d')
    // 绘制镂空形状
    drawPath(canvasCtx, 50, 50, 'fill')

    // 画入图片
    canvasCtx.drawImage(img, 0, 0, width, height)


    return (
        <div>
             <div>
                <canvas ref={canvasEl} width={width} height={height}></canvas>
                <canvas width={width} height={height}></canvas>
            </div>
            <div>
                
            </div>
        </div>
    )

}

export default VerSlid