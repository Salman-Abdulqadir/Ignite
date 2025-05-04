import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/paths";

const AppBreadcrumps = ({ locations = [] }) => {
  const navigate = useNavigate();
  const breadCrumpPaths = [
    { label: "Home", icon: Home, path: paths.home },
    ...locations,
  ];
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {breadCrumpPaths.map((path) => (
          <li key={path.path} onClick={() => navigate(path.path)}>
            <a className="flex items-center gap-1">
              <path.icon size={18} /> {path.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppBreadcrumps;
