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

export const details = [
    {title: 'Name of Guide', thumbnail: 'Thumbnail', description: 'Description', images: 'Image file', content: 'Text for Guide...'}
]

export const progress = [
    {flowerid: 'Flower', data: 'amount', status: 'locked or unlocked', date: 'date'}
]*/

export const plans = [
    {id: 1, num: '1', header: 'Run for Fun', description: 'Aim for light jog for 5 mins'},
    {id: 2, num: '2', header: 'Relax & Assess', description: 'Give yourself some love!'},
    {id: 3, num: '3', header: 'Run for Fun, Again!', description: 'Just enjoy nature!'},
    {id: 4, num: '4', header: 'Small Steps', description: 'Aim for a light jog for 10 mins'},
    {id: 5, num: '5', header: 'Touch Grass!', description: 'Reconnect with nature'},
    {id: 6, num: '6', header: 'First Challenge', description: 'Try to keep pace for 1 minute!'},
    {id: 7, num: '7', header: 'Party Time!', description: 'Celebrate your first week!'},
];

export const widgets = [
    {id: "1",title: 'Title', icon: 'Icon', value: 'Small information', details: 'Full information'}
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
        distance: '1.9',
        pace: "12.45",
        duration: '25:57',
        emotion: 'vhappy',
        problems: 'Problems',
        map: 'Map'
    },
    {
        id: 2,
        date: '3/9/2024',
        starttime: '2:35pm',
        distance: '2.1',
        pace: "13.34",
        duration: '23:03',
        emotion: 'normal',
        problems: 'Problems',
        map: 'Map'
    }
]

export const records = [
    {title: 'Longest Run', data: '20:45 ', measurement: '', icon: '$lib/assets/flower.svg'},
    {title: 'Farthest Run', data: '1.93 ', measurement: 'mi.', icon: '$lib/assets/flower.svg'},
    {title: 'Longest Streak', data: '1.93 ', measurement: 'days', icon: '$lib/assets/flower.svg'},
    {title: 'Fastest 5K', data: '24:45 ', measurement: '', icon: '$lib/assets/flower.svg'},
    {title: 'Fastest 10K', data: '34:40 ', measurement: '', icon: '$lib/assets/flower.svg'},
    {title: 'Fastest Half Marathon', data: '45:00 ', measurement: '', icon: '$lib/assets/flower.svg'},
    {title: 'Farthest Marathon', data: '1:03:34 ', measurement: '', icon: '$lib/assets/flower.svg'}
]

export const awards = [
    {title: 'Take 10K Steps', type: 1, date:'3/9/2024', xp: '100', icon: '$lib/assets/backIcon.svg'},
    {title: 'Take 50K Steps', type: 0, date:'', xp: '500', icon: '$lib/assets/flower.svg'},
    {title: 'Take 100K Steps', type: 0, date:'', xp: '1000', icon: '$lib/assets/flower.svg'},
    {title: 'First Run', type: 1, date:'1/28/2024', xp: '50', icon: '$lib/assets/flower.svg'},
    {title: '10 Runs', type: 1, date:'2/7/2024', xp: '100', icon: '$lib/assets/flower.svg'},
    {title: '50 Runs', type: 0, date:'', xp: '500', icon: '$lib/assets/flower.svg'},
    {title: '100 Runs', type: 0, date:'', xp: '1000', icon: '$lib/assets/flower.svg'},
    {title: '7 Day Streak', type: 1, date:'2/4/2024', xp: '100', icon: '$lib/assets/flower.svg'},
    {title: '20 Day Streak', type: 0, date:'', xp: '250', icon: '$lib/assets/flower.svg'},
    {title: '50 Day Streak', type: 0, date:'', xp: '750', icon: '$lib/assets/flower.svg'},
    {title: '100 Day Streak', type: 0, date:'', xp: '1000', icon: '$lib/assets/flower.svg'},
    {title: 'Run for a Month', type: 0, date:'', xp: '250', icon: '$lib/assets/flower.svg'},
    {title: 'Run for a Year', type: 0, date:'', xp: '1000', icon: '$lib/assets/flower.svg'}
]

export const details = [
    {title: 'Name of Guide', thumbnail: 'Thumbnail', description: 'Description', images: 'Image file', content: 'Text for Guide...'}
]

export const progress = [
    {flowerid: 'Flower', data: 'amount', status: 'locked or unlocked', date: 'date'}
]