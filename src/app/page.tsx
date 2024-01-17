import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import Start from './component/start'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-6 md:gap-8">
      <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
<div className='flex items-center justify-center bg-slate-700 md:w-[471px] md:h-[106px] rounded-xl'>
<Image src="/logo.svg" height={62} width={96} alt='it is a logo image of fithub' />
</div>
<div className='md:w-[849px] md:h-[106px] p-6 bg-slate-900 rounded-xl justify-center items-center gap-2.5 inline-flex'>
  <h1 className='text-white text-3xl md:text-4xl font-black ' style={{fontFamily: 'Bebas Neue'}}>
    SIGN UP UI DESIGN
  </h1>
</div>
      </div>
      <Start />
    </main>
  )
}
