import { useRoutes } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';

const ShareStory = LazyLoading(() => import('../pages/Story/Share'));

//err handlers
const NotFound = LazyLoading(() => import('../pages/NotFound'));
// const AuthOutlet = LazyLoading(() => import('../components/HOC/AuthOutlet'));
const Home = LazyLoading(() => import('../pages/website/Home'));
const ErorrBoundary = LazyLoading(() =>
    import('../components/HOC/ErrorBoundary')
);

const AppRoutes = () => {
    let allRoutes = useRoutes([
        {
            path: '/',
            children: [{ element: <Home />, index: true }],
        },
        {
            path: '/share-story',
            children: [{ element: <ShareStory />, index: true }],
        },
        {
            // =======
            // >>>>>>> 74763df8bbd4e67e19856d0a4e6a726ba0362df9
            path: '*',
            element: <NotFound />,
        },
    ]);
    return allRoutes;
};

export default AppRoutes;
