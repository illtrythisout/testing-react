import { useParams } from 'react-router-dom';
import Popeye from './Popeye.jsx';
import Spinach from './Spinach.jsx';
import DefaultProfile from './DefaultProfile.jsx';

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from your profile page</h1>
      <p>How are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}

export default Profile;
