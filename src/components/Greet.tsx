type GreetTypes = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetTypes) => {
  const { messageCount = 0 } = props;
  return (
    <div style={{ marginTop: 100, fontSize: 24, fontWeight: 700 }}>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages`
        : `Welcome Guest`}
    </div>
  );
};

export default Greet;
