import { useNavigate } from "react-router-dom";

export default function NewsLetter() {
  let navigate = useNavigate();

  function handleNewsletter() {
    navigate("/about");
  }


  return (
    <section>
      <h3>Sign Up For Our Newsletter</h3>
      <button onClick={handleNewsletter}>Sign me up for hourly updates!</button>
    </section>
  );
}
