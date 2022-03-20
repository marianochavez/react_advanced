import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-Lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    // LazyExoticComponent are lazy loaded components and are loaded only when they are rendered
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// webpackChunkName changes the name of the chunk that will be created
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-Lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },

]