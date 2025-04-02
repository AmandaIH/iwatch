export const Header = () => {
  return (
    <header>
      <ul className="text-white flex gap-16 p-4 justify-center">
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full  pr-4 pl-4 p-1 cursor-pointer">
          Mac
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          iPhone
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          iPad
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          iWatch
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          Support
        </li>
      </ul>
    </header>
  );
};

export const Footer = () => {
  return <footer></footer>;
};
