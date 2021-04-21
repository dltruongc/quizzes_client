export default function SideBarItem({ icon, title, active }) {
    return <div className={`side_bar__item ${(active && 'active') || ''}`}>
        <span className="side_bar__item__icon">{icon}</span>
        <span className="side_bar__item__title">{title}</span>
    </div>
};
