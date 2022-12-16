const Layout = ({ children }: any) => {
  return (
    <div className="bg-set">
      <div
        className="pt-120 pb-100"
        style={{
          width: 'initial',
          margin: 'auto',
          maxWidth: '1130px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
