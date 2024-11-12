import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <div id='projects' className="h-full w-full flex flex-col gap-10 py-52 px-10">
      <p className='text-center text-neutral-500 text-xl font-normal'>
        ✦ FEATURED WORK ✦
      </p>
      <h2 className="text-4xl sm:text-4xl font-normal text-white text-center">
        Development showcase
      </h2>
      <div className="bg-neutral-800 transition-all hover:rotate-2 px-1 py-1 rounded-[40px] bg-transparent backdrop-blur-lg border border-neutral-600">
        <Link href="https://vaultyy.vercel.app" target='_blank'>
          <Image src="/VaultyBox.png" alt="Vaulty" width={850} height={300} unoptimized />
        </Link>
      </div>
      <div className="bg-neutral-800 transition-all hover:rotate-2  px-1 py-1 rounded-[40px] bg-transparent backdrop-blur-lg border border-neutral-600">
        <Link href="https://torque3d.vercel.app" target='_blank'>
          <Image src="/TorqueBox.png" alt="Torque Project" width={850} height={300} unoptimized />
        </Link>
      </div>
      <div className="bg-neutral-800 transition-all hover:rotate-2 px-1 py-1 rounded-[40px] bg-transparent backdrop-blur-lg border border-neutral-600">
        <Link href="https://github.com/DiegoDev2/Fleet" target='_blank'>
          <Image src="/FleetBox.png" alt="Fleet Project" width={850} height={300} unoptimized />
        </Link>
        
      </div>
    </div>
  );
}
