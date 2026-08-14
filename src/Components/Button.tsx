type ButtonProps = {
  name: string;
  age: number;
  isMarried: boolean;
  gender: string;
};

const Button = ({ name, age, isMarried, gender }: ButtonProps) => {
  return (
    <div>
      <button className="button">{name}</button>

      <h1>{age}</h1>
      <h1>{gender}</h1>
      <h1>{isMarried}</h1>
    </div>
  );
};

export default Button;