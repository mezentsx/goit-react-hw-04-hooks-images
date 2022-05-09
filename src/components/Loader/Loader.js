import { BallTriangle } from "react-loader-spinner";
import s from "./Loader.module.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Spinner () {
  return (
    <div className={s.Loader}>
      <BallTriangle color="#00BFFF" height={150} width={150} />
    </div>
  );
}
