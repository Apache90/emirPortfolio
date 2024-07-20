import Link from 'next/link';
import { Button } from './ui/button';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-black'>
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
            <h1 className='text-4xl font-semibold'>
              Emir<span className='text-accent'>.</span>
            </h1>
            </Link>
            
            {/* nav de escritorio y hire me button */}
            <div className='hidden xl:flex items-center gap-8'>
            <Navbar />
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
            </div>

          {/* nav de mobile */}
          <div className='xl:hidden'>
          <MobileNav />
          </div>

        </div>
    </header>
  )
}

export default Header