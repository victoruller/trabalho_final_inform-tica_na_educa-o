import '../App.css'
import '../styles/topic.css'

import { useParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import GitInit from '../components/GitInit';
import GitBranch from '../components/GitBranch';
import GitCheckout from '../components/GitCheckout';
import GitCommit from '../components/GitCommit';
import GitPull from '../components/GitPull';
import GitPush from '../components/GitPush';
import GitMerge from '../components/GitMerge';
import GitLog from '../components/GitLog';
import GitStatus from '../components/GitStatus';
import GitReset from '../components/GitReset';
import GitRemote from '../components/GitRemote';
import GitFetch from '../components/GitFetch';

import GitAdd from '../components/GitAdd';
import GitDiff from '../components/GitDiff';
import GitRebase from '../components/GitRebase';
import GitRevert from '../components/GitRevert';
import GitSwitch from '../components/GitSwitch';


function Topic() {
  const { command } = useParams();

  const componentsMap = {
    'git-init': <GitInit />,
    'git-branch': <GitBranch />,
    'git-checkout': <GitCheckout />,
    'git-commit': <GitCommit />,
    'git-pull': <GitPull />,
    'git-push': <GitPush />,
    'git-merge': <GitMerge />,
    'git-log': <GitLog />,
    'git-status': <GitStatus />,
    'git-reset': <GitReset />,
    'git-remote': <GitRemote />,
    'git-fetch': <GitFetch />,
    'git-add': <GitAdd />,
    'git-diff': <GitDiff />,
    'git-rebase': <GitRebase />,
    'git-revert': <GitRevert />,
    'git-switch': <GitSwitch />
  };

  const SelectedComponent = componentsMap[command] || <p>Comando não encontrado.</p>;

  return (
    <div className="topic_div">
      <Header />
      <div className="content">
        <SideBar />
        <section className='section_main_text'>
          {SelectedComponent}
        </section>
      </div>
    </div>
  );
}

export default Topic;
