import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Posts</a>
    </Link>
    <Link href="/description">
      <a style={linkStyle}>Description</a>
    </Link>
  </div>
);

export default Header;