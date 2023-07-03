import Navbar from "./Navbar"

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main className="container mx-auto lg:px-6">
        {children}
      </main>
    </>
  )
};

export default Header;