import "./Social.css";
import { FiArrowUpRight } from "react-icons/fi";

const SocialLinks = ({ children, href }: any) => {
  return (
    <a href={href} target="_blank">
      <li className="flex transition-all items-center gap-1 hover:text-gray-200">
        {children}
        <div className=" transition-all">
          <FiArrowUpRight />
        </div>
      </li>
    </a>
  );
};

export default SocialLinks;
