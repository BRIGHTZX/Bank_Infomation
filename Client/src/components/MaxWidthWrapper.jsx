function MaxWidthWrapper({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export default MaxWidthWrapper;
