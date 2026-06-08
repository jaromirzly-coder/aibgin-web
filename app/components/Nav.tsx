import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

export default function Nav() {
  return (
    <>
      <div style={{background:'#7c3aed',color:'#ffffff',textAlign:'center',padding:'14px 20px',fontSize:'14px',fontWeight:600,width:'100%',display:'block',lineHeight:'1.4'}}>
        ⚠️ Pilotní program AIBgin je uzavřen. Připravujeme prázdninový program — zveřejníme před pázdninami.
      </div>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div style={{width:"40px",height:"40px",borderRadius:"50%",overflow:"hidden"}} className="mr-2 flex-shrink-0">
            <Image src="/logo.png" width={40} height={40} alt="AIBgin logo" style={{borderRadius:"50%",objectFit:"cover"}} />
          </div>
          <span className="font-black text-xl tracking-tight" style={{ color: '#6C47FF' }}>
            AIBgin
          </span>
          <span className="hidden sm:inline text-xs text-gray-400 font-medium border border-gray-200 rounded-full px-2 py-0.5">
            pro děti
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-3">
          <a
            href="https://app.aibgin.cz/login"
            className="hidden sm:block text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Přihlásit se
          </a>
        </div>
      </div>
    </header>
    </>
  );
}
