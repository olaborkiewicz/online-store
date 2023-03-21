const Container = ({ className, children }) => {
  return <div className={`box-container ${className}`}>{children}</div>;
};

export default Container;
