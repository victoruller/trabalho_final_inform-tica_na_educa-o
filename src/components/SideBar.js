import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/topic/git-init">Git Init</Link></li>
        <li><Link to="/topic/git-branch">Git Branch</Link></li>
        <li><Link to="/topic/git-checkout">Git Checkout</Link></li>
        <li><Link to="/topic/git-commit">Git Commit</Link></li>
        <li><Link to="/topic/git-pull">Git Pull</Link></li>
        <li><Link to="/topic/git-push">Git Push</Link></li>
        <li><Link to="/topic/git-merge">Git Merge</Link></li>
        <li><Link to="/topic/git-log">Git Log</Link></li>
        <li><Link to="/topic/git-status">Git Status</Link></li>
        <li><Link to="/topic/git-reset">Git Reset</Link></li>
        <li><Link to="/topic/git-remote">Git Remote</Link></li>
        <li><Link to="/topic/git-fetch">Git Fetch</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;
