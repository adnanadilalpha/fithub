import Image from "next/image"
import { Bebas_Neue } from "next/font/google"

export default function Start () {
    return (
        <div className="flex flex-col  md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-8">
<div className="w-360 md:w-[860px] md:h-[471px] p-6 bg-teal-700 rounded-xl flex-col gap-2.5 flex">
<h1 className="text-white text-3xl font-bold text-center" style={{fontFamily: "Bebas Neue"}}>
                START
            </h1>
           <div className="md:rotate-90">
            <Image className="rounded-xl overflow-hidden"
             src="/start.png" width={375} height={20} alt="preview" />
           </div>
</div>
<div className="flex items-center justify-center">
<Image className="md:w-[860px] md:h-[411]" src="/mood.png" width={360} height={800} alt="materials picture" />
</div>
</div>
            <div className="md:flex gap-8">
            <div className="w-360 md:w-[460px] md:h-[910px] px-3 py-6 bg-slate-500 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
                <h1 className="text-white text-3xl font-bold text-center" style={{fontFamily: "Bebas Neue"}}>
                    PROTOTYPE
                </h1>
            <iframe
            style={{border: "1px solid rgba(0, 0, 0, 0.1)", width: "360px", height: "812px", borderRadius: "12px"}} 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjzPzw1M3egCS1qjJlq2WZQ%2F100-Day-challenge%3Fpage-id%3D0%253A1%26node-id%3D1-81%26scaling%3Dcontain%26starting-point-node-id%3D1%253A81%26mode%3Ddesign%26t%3D9dX7mah0JQ95Drpw-1" allowFullScreen>
            </iframe>
</div>
</div>
        </div>
    )
}