export default function Footer(){
  return(
    <footer className="bg-personal-black flex justify-between p-2 items-bottom align-bottom w-full lg:h-14">
      <div>
      <a href="https://www.facebook.com/jasubip" target='_blank' className="flex items-center h-1/3 lg:h-auto">
        <h3 className="text-white mr-2">By</h3>
        <img src='/img/icons/Imagotipo-Blanco.png' alt='By JasubiP' className="h-6" />
      </a>
      </div>
      <div className="flex gap-2">
        <a href="#" target='_blank'><img src="/img/icons/facebook.png" alt="Facebook" className="h-6"/></a>
        <a href="#" target='_blank'><img src="/img/icons/instagram.png" alt="Instagram" className="h-6" /></a>
        <a href="#" target='_blank'><img src="/img/icons/twitter.png" alt="Twitter" className="h-6" /></a>
      </div>
    </footer>
  )
}