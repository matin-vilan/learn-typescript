type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content of container</div>;
};

export default Container;
