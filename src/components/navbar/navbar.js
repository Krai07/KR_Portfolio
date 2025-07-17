import { Link } from 'react-scroll';

function Navbar() {
  const navLinks = ['Home', 'About', 'Education', 'Work', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-[#f9f4e8] shadow-md z-50">
      <ul className="flex list-none justify-center gap-4 md:gap-10 py-4 text-[#4a3f35] text-sm md:text-base font-medium">
              {navLinks.map((name) => (
          <li key={name}>
            <Link
              to={name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#6d584e] transition-colors duration-200"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;