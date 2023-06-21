import { Name } from "./Person.types";

type PersonsListProps = {
  names: Name[];
};
const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name, i) => {
        return (
          <div key={i}>
            {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
