const Header = () => {
  return (
    <header className="header" style={{
      padding: "20px 0 10px",
      borderBottom: "1px solid #ccc",
      marginBottom: "10px"
    }}>
      <h2 style={{
        fontFamily: "Merriweather, serif",
        fontSize: "18px",
        textTransform: "uppercase"
        }}>My wishlist</h2>
    </header>
  );
}

export default Header;
