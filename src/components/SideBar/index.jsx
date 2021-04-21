import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoLibraryOutline, IoBarChartOutline, IoSettingsOutline } from 'react-icons/io5';
import { GoKebabVertical, GoGithubAction } from 'react-icons/go';

import './SideBar.scss';
import SideBarAvatar from './Avatar';
import SideBarItem from './Item';

export default function SideBar(props) {
    return <div className="side_bar">
        <SideBarAvatar />
        <div>
            <SideBarItem icon={<FaMapMarkedAlt/>} title='explore'/>
            <SideBarItem icon={<IoLibraryOutline/>} title='my library'/>
            <SideBarItem icon={<IoBarChartOutline/>} title='reports' active/>
            <SideBarItem icon={<GoGithubAction/>} title='classes'/>
            <SideBarItem icon={<IoSettingsOutline/>} title='settings'/>
            <SideBarItem icon={<GoKebabVertical/>} title='more'/>
        </div>
    </div>
};
