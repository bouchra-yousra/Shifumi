import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components";

import { Settings } from "../components/settings/Settings";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Settings
        title={"Shifumi challenge"}
        open={true}
        onUpdateGameSettings={() => {
          navigate("/game");
        }}
        buttonText="Start"
      />
    </PageContainer>
  );
};
