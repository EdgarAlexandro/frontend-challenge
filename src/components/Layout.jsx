import Navbar from './Header.jsx';
import Footer from './Footer.jsx';
import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
