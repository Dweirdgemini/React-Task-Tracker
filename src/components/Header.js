export default function Navbar() {
  return(
<nav className="bg-black text-white flex justify-between items-center gap-4 px-1 no-underline">
<a href='/' className="">
Josh Navbar
</a>
<ul className="p-0 m-0 list-none flex gap-4">
  <li>
    <a href='/pricing'>Pricing</a>
  </li>
  <li>
    <a href='/about'>About</a>
  </li>
</ul>

</nav>
  ) 
}