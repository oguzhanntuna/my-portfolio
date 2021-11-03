import ProjectFilter from '../models/project-filter';
import ProjectItem from '../models/project-item';
import WebProject1 from '../assets/web-project-1.png';
import WebProject2 from '../assets/web-project-2.png';
import WebProject3 from '../assets/web-project-3.png';
import WebProject4 from '../assets/web-project-4.png';
import WebProject5 from '../assets/web-project-5.png';
import WebProject6 from '../assets/web-project-6.png';
import MobileProject1A from '../assets/mobile-project-1a.png';
import MobileProject1B from '../assets/mobile-project-1b.png';
import MobileProject1C from '../assets/mobile-project-1c.png';
import MobileProject2A from '../assets/mobile-project-2a.png';
import MobileProject2B from '../assets/mobile-project-2b.png';
import MobileProject2C from '../assets/mobile-project-2c.png';

const WEB_PROJECT_ITEMS = [
    new ProjectItem(
        '01 ToDo-List With Authentication',
        'web',
        WebProject1,
        'A basic to do application.',
        [
            'React.js',
            'Firebase',
            'Typescript',
            'Sass'
        ],
        [
            'Weather module using weather API.',
            'Sign in / Login feature.',
            'Text actions such as highlighting or crossing.'
        ],
        'https://github.com/oguzhanntuna/to-do-app',
        'https://to-do-app-aa457.web.app/'
    ),
    new ProjectItem(
        '02 Burger Builder',
        'web',
        WebProject2,
        'An application to create your own burger and order it.',
        [
            'React.js',
            'Firebase',
            'Redux'
        ],
        [
            'Past Orders section.',
            'Sign in / Login feature.'
        ],
        'https://github.com/oguzhanntuna/burger-builder-project',
        'https://react-my-burger-3b52a.web.app/'
    ),
    new ProjectItem(
        '03 Marvel Characters',
        'web',
        WebProject3,
        'Showing off all marvel characters and some additional info of them by using Marvel’s API.',
        [
            'React.js',
            'Sass'
        ],
        [
            'Infinity Scroll'
        ],
        'https://github.com/oguzhanntuna/marvel-characters',
        'https://marvel-characters-3c050.web.app/'
    ),
    new ProjectItem(
        '04 Shopping Mall Website',
        'web',
        WebProject4,
        'Using static data to show off some shopping mall campaigns and stores. User also can search for a certain brand to see which floor it is located.',
        [
            'React.js',
            'Sass'
        ],
        [
            'Change language feature.'
        ],
        'https://github.com/oguzhanntuna/indoor-navigation-system-without-mapping-system',
        'https://indoor-navigation-system-bbcce.web.app/0'
    ),
    new ProjectItem(
        '05 Trillo Static Website',
        'web',
        WebProject5,
        'A project to learn more about CSS Flexbox. Only a static website, there is no functionality',
        [
            'Html',
            'Sass'
        ],
        [],
        'https://github.com/oguzhanntuna/trillo-static-flexbox-project',
        'https://trillo-static.web.app/'
    ),
    new ProjectItem(
        '06 Nexter Static Website',
        'web',
        WebProject6,
        'A project to learn more about CSS Grid. Only a static website, there is no functionality',
        [
            'Html',
            'Sass'
        ],
        [],
        'https://github.com/oguzhanntuna/nexter-static-css-grid-project',
        'https://nexter-static.web.app/'
    )
];

const MOBILE_PROJECT_ITEMS = [
    new ProjectItem(
        '01 Shop Application',
        'mobile',
        [
            MobileProject1A,
            MobileProject1B,
            MobileProject1C
        ],
        'A basic ecommerce application. User can see list of products and purchase it.',
        [
            'React Native',
            'Firebase'
        ],
        [
            'Sing in / Login feature.',
            'An Admin panel to add a new products or change its informations such as price, description, title.',
            'Past Orders section.'
        ],
        'https://github.com/oguzhanntuna/the-shop-app',
        ''
    ),
    new ProjectItem(
        '02 Meals Application ',
        'mobile',
        [
            MobileProject2A,
            MobileProject2B,
            MobileProject2C
        ],
        'Using static meal data to show off its ingredients and recipes.',
        [
            'React Native'
        ],
        [
            'Favorites section.',
            'Filters section.'
        ],
        'https://github.com/oguzhanntuna/the-meals-app',
        ''
    )
]

const PROJECT_FILTERS = [
    new ProjectFilter('Web Applications', 'web'),
    new ProjectFilter('Mobile Applications', 'mobile')
];

export { 
    WEB_PROJECT_ITEMS,
    MOBILE_PROJECT_ITEMS,
    PROJECT_FILTERS
};