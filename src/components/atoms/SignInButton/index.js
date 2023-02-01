import "./style.css";
const SignInButton = ({ children, buttonClass }) => {
   return <div className={`${buttonClass}`}>{children}</div>;
};

export default SignInButton;
