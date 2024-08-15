import { getMemberBySlug } from "@/app/actions/team.action";
import EditTeam from "./edit-team";

export const metadata = {
  title: "Edit Team | Dashboard",
};

const EditTeamPage = async ({ params }) => {
  console.log(params);
  const { member } = await getMemberBySlug(params.id);

  return (
    <main className="">
      <EditTeam initialData={member} />
    </main>
  );
};

export default EditTeamPage;
