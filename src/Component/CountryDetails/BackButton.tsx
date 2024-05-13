import { Link } from "react-router-dom";

export default function BackButton({ modeInput }: { modeInput: string }) {
  return (
    <Link className="backButton flex items-center" to={"/"}>
      <div>
        <img src={`/images/icons/${modeInput}/back_arrow.svg`} />
      </div>
      <div>Back</div>
    </Link>
  );
}
