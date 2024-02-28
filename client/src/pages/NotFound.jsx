import { RobotIcon } from "../components/ui/Icons";
import '../css/notfound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__404-box">
        <RobotIcon />
        <h1 className="not-found__404">404</h1>
      </div>
      <h2 className="not-found__text">Not found</h2>
    </div>
  );
}

export default NotFound;