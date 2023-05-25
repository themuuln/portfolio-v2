import "./Button.css"

const HeaderButtons = ({ children, href }) => {
  return (
    <a href={href}>
      <li className="hover:text-zinc-400 gap-2 flex items-center duration-150 transition-colors cursor-pointer">
        <div className="w-8 border-zinc-500 transition-all duration-150 border" />
        {children}
      </li>
    </a>
  )
}

export default HeaderButtons