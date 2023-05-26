import "./Social.css";

const SocialLinks = ({ children, href }: any) => {
  return (
    <a href={href} target="_blank">
      <li className="flex transition-all items-center gap-1 hover:text-gray-200">
        {children}
        <div className=" transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-arrow-up-right"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </li>
    </a>
  );
};

export default SocialLinks;
