"use client";

const SignOut = ({ signout }) => {
  return (
    <div
      className="font-bold text-muted-foreground cursor-pointer"
      onClick={() => signout()}
    >
      signout
    </div>
  );
};

export default SignOut;
