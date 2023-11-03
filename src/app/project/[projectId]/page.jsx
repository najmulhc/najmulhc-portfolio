 
import { H1 } from "../../components/Typography/Typography";

const Page = ({params}) => { 
  const id = params.projectId;
  return (
    <main>
      <H1> You are at project {id}</H1>
    </main>
  );
};

export default Page;
