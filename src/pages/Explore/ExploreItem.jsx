import { IoListOutline, IoPlayOutline } from "react-icons/io5";

export default function ExploreItem(props) {
  // TODO: mockup data
  const item = {
    type: "Quiz",
    name: "Transformations!",
    questions: [
      { name: "Quest 1" },
      { name: "Quest 2" },
      { name: "Quest 3" },
      { name: "Quest 4" },
      { name: "Quest 5" },
      { name: "Quest 6" },
    ],
    views: 13000,
    image:
      "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/39c5032a-4657-4109-be63-27693003a253?w=200&h=200",
  };

  return (
    <div className="explore_section__body__item">
      <div
        className="explore_section__body__item__image"
        style={{ backgroundImage: `url('${item.image}')` }}
      ></div>
      <div className="explore_section__body__item__body">
        <div className="explore_section__body__item__body__type">
          {item.type}
        </div>
        <div className="explore_section__body__item__body__name">
          {item.name}
        </div>
        <div className="explore_section__body__item__body__desc">
          <span>
            <span className="icon">
              <IoListOutline />
            </span>
            {item.questions.length} questions
          </span>
          <span className="explore_section__body__item__body__views">
            <span className="icon">
              <IoPlayOutline />
            </span>
            {item.views} plays
          </span>
        </div>
      </div>
    </div>
  );
}
