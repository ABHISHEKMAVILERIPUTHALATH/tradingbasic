interface Appbarprop {
  children: string;
}
const heading = {
  fontSize: "50px",
  color: "green",
  fontWeight: "700",
  fontFamily: "Arial",
};
const Appbar = ({ children }: Appbarprop) => {
  return <h1 style={heading}>{children}</h1>;
};

export default Appbar;
