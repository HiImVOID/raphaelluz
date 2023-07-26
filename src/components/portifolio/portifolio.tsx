import Image from 'next/image'
import Link from 'next/link'

const Portifólio = () => {
    return (<section className='p-5 backdrop-blur-lg bg-gray-400/30 rounded-3xl'>
        <div className='flex flex-col lg:flex-row gap-3 gap-y-5 justify-between'>
            <div className='flex flex-col gap-y-5 w-full pl-5'>
                <h2 className='text-2xl'>Biblioteca Ocultista</h2>
                <p>
                    Biblioteca Ocultista é uma vitrine de artigos e produtos do
                    universo mistico e esóterico.
                </p>
                <div className='flex flex-col'>
                    <Link
                        href={'https://www.bibliotecaocultista.com/'}
                        target='_blank'
                        className='underline w-max'>
                        Ir para o site
                    </Link>
                    <Link
                        href={'https://github.com/HiImVOID/biblioteca-ocultista'}
                        target='_blank'
                        className='underline w-max'>
                        Ir para o repositorio no GitHub
                    </Link>
                </div>
                <div className='flex justify-between gap-x-5'>
                    <dl className='flex flex-col w-[30%] gap-y-2'>
                        <dt>Tecnologias Utilizadas:</dt>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            Git
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            JSX
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            React
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            NextJS
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            TypeScript
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            ReactHooks
                        </dd>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            TailwindCSS
                        </dd>
                        <dt>Features:</dt>
                        <dd className='w-full p-2 text-center rounded-r-full rounded-l-full bg-slate-700 bg-opacity-40 text-white hover:bg-opacity-100 hover:bg-slate-900'>
                            Carrinho de Compras
                        </dd>
                    </dl>
                    <div className='w-full p-8 rounded-xl backdrop-blur-lg bg-white/50'>
                        guafsdgfuasd udash fsdhfdosf odifh ashfasdi hfdasiohfasdfhasdf
                        hasdfhasd hfasd ofhadsof hasdf hasdof fdh asdiofhasd ofhsdof
                        hasdf hiosdfhasd hfa
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={'/portifolio/BibliotecaOcultista.jpg'}
                    width={343}
                    height={343}
                    alt='Biblioteca Ocultista'
                    className='rounded-xl'
                />
            </div>
        </div>
    </section>)
}
    
export default Portifólio