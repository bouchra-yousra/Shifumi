import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components";
import { Settings } from "../components/settings/Settings";
import { Background } from "../components/container/Background";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Background />
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
