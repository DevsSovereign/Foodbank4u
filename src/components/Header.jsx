const Header = () => {
  return (
    <nav className="m-2 py-3 pl-3 pt-3 md:pl-5 md:py-7 flex items-center justify-between">
    <span className="flex items-center gap-2">
      <img src="/assets/foodbank-logo.png" alt="foodbank logo" />
      <p className="font-bold text-secondary text-xl sm:block hidden">
        FOODBANK
      </p>
    </span>
  </nav>

  )
}

export default Header