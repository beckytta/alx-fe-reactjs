import ProfilePage from './ProfilePage';
import UserContext from '../UserContext';

function App() {
  const userData = { name: "Glen Joshua", email: "glen.joshua@gmail.com" };

  return(
    <UserContext.Provider value={userData}>
    <ProfilePage />
    </UserContext.Provider>
  );
}
export default App;