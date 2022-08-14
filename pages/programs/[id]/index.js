import { useRouter } from "next/router";
import React from "react";
import useFetch from "../../../components/Hooks/useFetch";
import ProgramDetails from "../../../components/ProgramDetails/ProgramDetails";
import PreLoader from "../../../components/Shared/PreLoader/PreLoader";

const ProgramDetailsPage = () => {
  let router = useRouter();
  const { id } = router.query;
  const programDetail = useFetch(`/get-program-detail/${id}`);
  const { details, get_program: program, summary } = programDetail.length > 0 && programDetail[0];

  return (
    <>
      {programDetail.length > 0 ? (
        <ProgramDetails
          image={story.image_path}
          title={story.title}
          sum={summary}
          html={details}
          slug="stories"
        ></ProgramDetails>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default ProgramDetailsPage;
