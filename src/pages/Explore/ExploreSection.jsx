import ExploreItem from "./ExploreItem";

export default function ExploreSection({ title }) {
  return (
    <div className="explore_section">
      <div className="explore_section__title">
        <div className="explore_section__title__name">{title}</div>
        <a href="#" className="btn btn-light">
          See more
        </a>
      </div>
      <div className="wrap">
        <div className="explore_section__body">
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
          <ExploreItem />
        </div>
      </div>
    </div>
  );
}
