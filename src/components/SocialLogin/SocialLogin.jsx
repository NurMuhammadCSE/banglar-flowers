import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathName || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }).then((res) => {
        console.log(res);
        navigate(from, { replace: true });
      });
    });
  };

  return (
    <div className="p-8 ">
      <div className="divider"></div>
      <div className="flex justify-center mx-auto">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
