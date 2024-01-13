import { useNavigate } from "react-router-dom";
import { Button, PageContainer } from "../components";

import { Settings } from "../components/settings/Settings";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate("/game");
        }}
      >
        Start
      </Button>
      <Settings open={true} />
    </>
  );
};
