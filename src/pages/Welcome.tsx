import { useNavigate } from "react-router-dom";
import { Button, PageContainer } from "../components";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Button
        onClick={() => {
          navigate("/game");
        }}
      >
        Start
      </Button>
    </PageContainer>
  );
};
