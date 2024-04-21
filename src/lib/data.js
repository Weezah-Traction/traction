import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';

/*export const plans = [
    {title: 'Day 1', icon: 'Icon File', date: 'Aim for light jog for 5 mins', description: 'This is a sample description'}
];

export const widgets = [
    {title: 'Title', icon: 'Icon', value: 'Small information', details: 'Full information'}
];

export const levels = [
    {level: '1', title: 'Name of Level', icon: 'Icon File', xp: 'XP Value'}
];

export const records = [
    {date: 'Date', time: 'Time', distance: 'Distance', duration: 'Duration', emotion: 'Emotion', problems: 'Problems', map: 'Map'}
]

export const flowers = [
    {title: 'Name of Flower', type: 'Record or Award', xp: 'XP Awarded', icon: 'Icon File'}
]
s
export const details = [
    {title: 'Name of Guide', thumbnail: 'Thumbnail', description: 'Description', images: 'Image file', content: 'Text for Guide...'}
]

export const progress = [
    {flowerid: 'Flower', data: 'amount', status: 'locked or unlocked', date: 'date'}
]*/

export const plans = [
    {id: 1, num: '1', header: 'Run for Fun', description: 'Aim for light jog for 5 mins', color: 'fun'},
    {id: 2, num: '2', header: 'Relax & Assess', description: 'Give yourself some love!', color: 'relax'},
    {id: 3, num: '3', header: 'Run for Fun, Again!', description: 'Just enjoy nature!', color: 'fun'},
    {id: 4, num: '4', header: 'Small Steps', description: 'Aim for a light jog for 10 mins', color: 'fun'},
    {id: 5, num: '5', header: 'Touch Grass!', description: 'Reconnect with nature', color: 'relax'},
    {id: 6, num: '6', header: 'First Challenge', description: 'Try to keep pace for 1 minute!', color: 'tough'},
    {id: 7, num: '7', header: 'Party Time!', description: 'Celebrate your first week!', color: 'relax'},
];

export const widgets = [
    {
        id: 1,
        state: 1, 
        title: 'Map',
        icon: '$lib/assets/widgIcons/mapIcon.svg', 
        value: '', 
        details: ''
    },
    {
        id: 2,
        state: 1, 
        title: 'Pre-Run Checklist',
        icon: '$lib/assets/widgIcons/prerunIcon.svg', 
        value: '0/4 done', 
        details: ''
    },
    {
        id: 3,
        state: 1, 
        title: 'Experience',
        icon: '$lib/assets/widgIcons/expIcon.svg', 
        value: '320 XP', 
        details: ''
    },
    {
        id: 4,
        state: 1, 
        title: 'Total Distance',
        icon: '$lib/assets/widgIcons/distIcon.svg', 
        value: '0.0 mi', 
        details: ''
    },
    {
        id: 5,
        state: 1, 
        title: 'Average Pace',
        icon: '$lib/assets/widgIcons/paceIcon.svg', 
        value: '0.0 mi/min',
        details: ''
    },
    {
        id: 6,
        state: 1, 
        title: 'Awards',
        icon: '$lib/assets/widgIcons/awardsIcon.svg', 
        value: 'Expand to See More',
        details: ''
    },
    {
        id: 7,
        state: 1, 
        title: 'Records',
        icon: '$lib/assets/widgIcons/recordsIcon.svg', 
        value: 'Expand to See More',
        details: ''
    },
    {
        id: 8,
        state: 1, 
        title: 'Last Run',
        icon: '$lib/assets/widgIcons/lastrunIcon.svg', 
        value: '2/24/2024',
        details: ''
    }
];

export const levels = [
    {id: 1, level: '1', title: 'New Runner', icon: '$lib/assets/flower.svg', xp: '1000', currentXP: '320', streak: '1'},
    {id: 2, level: '2', title: 'Beginner', icon: '$lib/assets/flower.svg', xp: '2000', currentXP: '0', streak: '1'},
    {id: 3, level: '3', title: 'Regular', icon: '$lib/assets/flower.svg', xp: '3000', currentXP: '0', streak: '1'},
    {id: 4, level: '4', title: 'Run Lover', icon: '$lib/assets/flower.svg', xp: '4000', currentXP: '0', streak: '1'},
    {id: 5, level: '5', title: 'Marathoner', icon: '$lib/assets/flower.svg', xp: '5000', currentXP: '0', streak: '1'},
    {id: 6, level: '6', title: 'Beast', icon: '$lib/assets/flower.svg', xp: '6000', currentXP: '0', streak: '1'},
];

export const runs = [
    {
        id: 1,
        date: '2/11/2024',
        starttime: '10:30pm',
        distance: 1.9,
        pace: 12.45,
        duration: 1536000, //25:57
        emotion: "normal",
        problems: 'Problems',
        map: 'Map'
    },
    {
        id: 2,
        date: '3/9/2024',
        starttime: '2:35pm',
        distance: 2.1,
        pace: 13.34,
        duration: 1383000, //23:03
        emotion: "vhappy",
        problems: 'Problems',
        map: 'Map'
    }
]

export const records = [
    {id: 1, title: 'Longest Run', data: '20:45 ', measurement: '', icon: "saplingBlue"},
    {id: 2, title: 'Farthest Run', data: '1.93 ', measurement: 'mi.', icon: "saplingOrange"},
    {id: 3, title: 'Longest Streak', data: '1.93 ', measurement: 'days', icon: "fireRed"},
    {id: 4, title: 'Fastest 5K', data: '24:45 ', measurement: '', icon: "crownOrange"},
    {id: 5, title: 'Fastest 10K', data: '34:40 ', measurement: '', icon: "crownBlue"},
    {id: 6, title: 'Fastest 1/2 Marathon', data: '45:00 ', measurement: '', icon: "crownRed"},
    {id: 7, title: 'Farthest Marathon', data: '1:03:34 ', measurement: '', icon: "crownPurple"}
]

export const awards = [
    {title: '10K Steps', type: 1, date:'3/9/2024', xp: '100 XP', icon: "saplingOrange"},
    {title: '50K Steps', type: 0, date:'', xp: '500 XP', icon: "saplingOrange"},
    {title: '100K Steps', type: 0, date:'', xp: '1000 XP', icon: 'saplingOrange'},
    {title: 'Improve Your Mile Time by 1 Min.', type: 0, date:'', xp: '2000 XP', icon: 'clockBlue'},
    {title: 'Improve Your Mile Time by 2 Min.', type: 0, date:'', xp: '3000 XP', icon: 'clockBlue'},
    {title: 'Run a 5K in Under 45 Min.', type: 0, date:'', xp: '10000 XP', icon: 'crownBlue'},
    {title: 'First Run', type: 1, date:'1/28/2024', xp: '50 XP', icon: 'saplingRed'},
    {title: '10 Runs', type: 1, date:'2/7/2024', xp: '100 XP', icon: 'shoeRed'},
    {title: '50 Runs', type: 0, date:'', xp: '500 XP', icon: 'shoeRed'},
    {title: '100 Runs', type: 0, date:'', xp: '1000 XP', icon: 'shoeRed'},
    {title: '7 Days', type: 1, date:'2/4/2024', xp: '100 XP', icon: 'fireOrange'},
    {title: '20 Days', type: 0, date:'', xp: '250 XP', icon: 'fireOrange'},
    {title: '50 Days', type: 0, date:'', xp: '750 XP', icon: 'fireOrange'},
    {title: '100 Days', type: 0, date:'', xp: '1000 XP', icon: 'fireOrange'},
    {title: 'Month-Long Streak', type: 0, date:'', xp: '250 XP', icon: 'fireOrange'},
    {title: 'Year-Long Streak', type: 0, date:'', xp: '1000 XP', icon: 'fireOrange'},
    {title: 'Early Bird', type: 0, date:'', xp: '1000 XP', icon: 'crownPurple'},
    {title: 'Batman', type: 0, date:'', xp: '1000 XP', icon: 'crownPurple'}
]

export const details = [
    {title: 'Name of Guide', thumbnail: 'Thumbnail', description: 'Description', images: 'Image file', content: 'Text for Guide...'}
]

export const progress = [
    {flowerid: 'Flower', data: 'amount', status: 'locked or unlocked', date: 'date'}
]