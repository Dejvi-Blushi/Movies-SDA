import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getTokenDuration } from '../util/auth';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';


const Layout = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log("tokenDuration: ", tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div>
      <NavigationMenu />
      <main>
        {/* Render child routes here */}
        <Outlet /> {/* Outlet options: */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;