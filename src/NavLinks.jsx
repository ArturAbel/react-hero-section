import { useGlobalContext } from "./Context";
import sublinks from "./data";

export const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { page, pageId } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
