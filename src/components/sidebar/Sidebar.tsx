import sidebarOne from '../../assets/images/sidebar-1.svg';
import sidebarTwo from '../../assets/images/sidebar-2.svg';
import sidebarThree from '../../assets/images/sidebar-3.svg';
import sidebarFour from '../../assets/images/sidebar-4.svg';
import sidebarFive from '../../assets/images/sidebar-5.svg';
import {Link, useLocation} from "react-router-dom";
import {SidebarItem} from "./sidebar.interface";
import './Sidebar.scss';

const Sidebar = () => {
    const sidebarItems: SidebarItem[] = [
        {
            icon: sidebarOne,
            alt: 'sidebar 1',
            path: '/'
        },
        {
            icon: sidebarTwo,
            alt: 'sidebar 2',
            path: '/'
        },
        {
            icon: sidebarThree,
            alt: 'sidebar 3',
            path: '/'
        },
        {
            icon: sidebarFour,
            alt: 'sidebar 4',
            path: '/reports'
        },
        {
            icon: sidebarFive,
            alt: 'sidebar 5',
            path: '/'
        }
    ];
    const location = useLocation();

    return (
        <div className="sidebar">
            {sidebarItems.map((item) => (
                    <div key={item.alt} className="sidebar__item mb-4">
                        <Link to={item.path}>
                            <img
                                className={item.path === location.pathname ? 'active' : ''}
                                src={item.icon}
                                alt={item.alt}
                            />
                        </Link>
                    </div>
                )
            )}
        </div>
    )
}

export default Sidebar;
