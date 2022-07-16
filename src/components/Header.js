export default function Navbar() {
  return(
<nav className="bg-black text-white flex justify-between items-center gap-4 px-1 no-underline font-DancingScript">
<a href='/' className="">
Josh Navbar
</a>
<ul 
    className="p-0 m-0 list-none flex gap-4 hover:bg-violet-600 active:bg-violet-700 ">
  <li>
    <a href='/pricing'>Pricing</a>
  </li>

  <li>
    <a href='/about'>About</a>
  </li>
</ul>

<a href='mailto:Johnsonjohnadakole@gmail.com'>
                <h1 className='text-center  bg-black  text-white rounded-lg mx-16 p-2 font-bold animate-bounce'>SEND NUDES</h1>
                </a>

</nav>
  ) 
}