import { IoSearch } from "react-icons/io5";
import "./Explore.scss";
import ExploreSection from "./ExploreSection";

export default function Explore(props) {
  return (
    <div className="explore">
      <div className="container">
        <h2 className="explore__hero_text">What will you teach today?</h2>
        <div className="explore__search">
          <label>
            <span className="icon">
              <IoSearch />
            </span>
            <input
              type="text"
              name="explore_search"
              id="explore_search"
              placeholder="Search for quizzes on any topic"
            />
          </label>
        </div>
        <ExploreSection title="Mathematics" />
        <ExploreSection title="Mathematics" />
        <ExploreSection title="Mathematics" />
        <ExploreSection title="Mathematics" />
        <ExploreSection title="Mathematics" />
        <ExploreSection title="Mathematics" />
      </div>
    </div>
  );
}
