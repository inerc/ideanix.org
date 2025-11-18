import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/Products/ProductDetail';
import OpenSource from '../pages/OpenSource';
import Pricing from '../pages/Pricing';
import Solutions from '../pages/Solutions';
import Blog from '../pages/Blog';
import BlogPost from '../pages/Blog/BlogPost';
import CaseStudies from '../pages/CaseStudies';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Legal from '../pages/Legal';
import NotFound from '../pages/NotFound';

export const routes = [
  // Home
  { path: '/', exact: true, component: Home },

  // Products
  { path: '/products', exact: true, component: Products },
  { path: '/products/:productId', exact: true, component: ProductDetail },

  // Open Source
  { path: '/open-source', exact: true, component: OpenSource },

  // Pricing
  { path: '/pricing', exact: true, component: Pricing },

  // Solutions
  { path: '/solutions', exact: true, component: Solutions },

  // Blog
  { path: '/blog', exact: true, component: Blog },
  { path: '/blog/:slug', exact: true, component: BlogPost },

  // Case Studies
  { path: '/case-studies', exact: true, component: CaseStudies },

  // About
  { path: '/about', exact: true, component: About },

  // Contact
  { path: '/contact', exact: true, component: Contact },

  // Legal
  { path: '/legal', exact: true, component: Legal },
  { path: '/legal/privacy', exact: true, component: Legal },
  { path: '/legal/terms', exact: true, component: Legal },
  { path: '/legal/refund', exact: true, component: Legal },

  // 404
  { path: '*', component: NotFound }
];
