export default function Footer(){
  return(
    <footer className="bg-personal-black flex flex-col px-2 py-20 align-bottom justify-center w-full">
      <div className="flex gap-2 justify-between">
        <h1 className="text-white text-center text-xl">Pineyro Fit</h1>
        <div className="flex gap-2 justify-center">
          <a href="#" target='_blank'><img src="/img/icons/facebook.png" alt="Facebook" className="h-6"/></a>
          <a href="#" target='_blank'><img src="/img/icons/instagram.png" alt="Instagram" className="h-6" /></a>
          <a href="#" target='_blank'><img src="/img/icons/twitter.png" alt="Twitter" className="h-6" /></a>
        </div>
      </div>
      <div className="mt-3">
        <a href="https://www.facebook.com/jasubip" target='_blank' className="flex justify-center opacity-40 hover:opacity-100">
          <h3 className="text-white mr-2">By</h3>
          <img src='/img/icons/Imagotipo-Blanco.png' alt='By JasubiP' className="h-8" />
        </a>
      </div>
    </footer>
  )
}