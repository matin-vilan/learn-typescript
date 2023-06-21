type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegetive?: never;
  isZero?: never;
};
type NegetiveNumber = RandomNumberType & {
  isPositive?: never;
  isNegetive: boolean;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isPositive?: never;
  isNegetive?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegetiveNumber | Zero;

const RandomNumber = ({
  value,
  isPositive,
  isNegetive,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegetive && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
