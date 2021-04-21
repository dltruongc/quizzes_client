export default function NoContent(props) {
  return (
    <div className="library__no_content">
      <div
        className="library__no_content__image"
        style={{ backgroundImage: `url(let_play.jpg)` }}
      ></div>
      <div className="library__no_content__title">
        Create your first quiz or lesson
      </div>
      <div className="library__no_content__sub_title">
        Pull in questions from the Quizizz library or make your own. It’s quick
        and easy!
      </div>
      <div className="mt-2">
        <a href="#" className="btn btn-primary mr-1">
          Create a quiz
        </a>
        <a href="#" className="btn btn-secondary">
          Create a lesson
        </a>
      </div>
    </div>
  );
}
