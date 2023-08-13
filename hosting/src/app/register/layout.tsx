interface Props {
  children: JSX.Element;
  modal: JSX.Element;
}

const Layout = ({ children, modal }: Props) => {
  return <>{children}</>;
};

export default Layout;
