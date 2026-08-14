type GreetingProps = {
  isLoggedIn: boolean;
};

function Greeting({ isLoggedIn }: GreetingProps) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Greeting;