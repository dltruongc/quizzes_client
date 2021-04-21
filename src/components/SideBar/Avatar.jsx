import './SideBar.scss';

export default function SideBarAvatar(props) {
    return <div className='side_bar__avatar'>
        <div className="side_bar__avatar__logo"></div>
        <div className="side_bar__avatar__content">
            <div className="side_bar__avatar__content__name">DLTruong</div>
            <div className="side_bar__avatar__content__plan">Plan: Basic</div>
        </div>
    </div>
};
