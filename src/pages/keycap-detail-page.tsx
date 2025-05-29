import { useParams } from "react-router-dom";

function KeycapDetailPage() {
  const { keycapId } = useParams<{ keycapId: string }>();

  console.log("heh", keycapId);

  return <div>KeycapDetailPage</div>;
}

export default KeycapDetailPage;
