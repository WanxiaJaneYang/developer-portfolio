import folks from "../assets/png/folks-task-management.png"
import fitness from "../assets/png/fitness.png"
import mobile from "../assets/png/mobile app.png"
import hanoi from "../assets/png/hanoi.png"
import shopping from "../assets/png/shopping.png"
import server from "../assets/png/server.png"
import routing from "../assets/png/routing algorithm.png"
import assembler from "../assets/png/machine-code.png"
import schedulor from "../assets/png/scheduler.png"
import translator from "../assets/png/translator.png"
import jack from "../assets/png/jack.png"
import protocol from "../assets/png/protocol.png"
import format from "../assets/png/format.png"


export const projectsData = [
    {
        id: 1,
        projectName: 'ArrowFit(Ongoing)',
        projectDesc: 'A fitness website designed for an Adelaide fitness business, offering membership management and personalized fitness programs.',
        tags: ['Java Spring Boot', 'MySQL', 'Maven'],
        code: '',
        demo: '',
        image: fitness
    },
    {
        id: 2,
        projectName: 'LabMan Admin',
        projectDesc: 'An equipment management system for the University of Adelaide. It streamlines course-specific lab equipment access and monitors equipment usage.',
        tags: ['React', 'AntD','Azure'],
        code: 'https://github.com/WanxiaJaneYang/labman-admin-end',
        demo: 'https://victorious-pebble-0bf6fea10.3.azurestaticapps.net',
        image: folks
    },
    {
        id: 3,
        projectName: 'LabMan Student',
        projectDesc: 'A mobile-friendly website enabling students of University of Adelaide to request course-specific equipment and monitor their own borrowing activities.',
        tags: ['React', 'Material Ui','Azure'],
        code: 'https://github.com/WanxiaJaneYang/Labman-Student',
        demo: 'https://delightful-river-0ac974110.3.azurestaticapps.net',
        image: mobile
    },
    {
        id: 4,
        projectName: 'Shopping Recommendation Algorithm',
        projectDesc: 'A smart algorithm designed for a grocery store that offers shopping suggestions based on a customer\'s past purchases.',
        tags: ['Python','Jupyter','Pattern Mining'],
        code: 'https://github.com/WanxiaJaneYang/recommendation_on_pattern',
        demo: '',
        image: shopping
    },
    {
        id: 5,
        projectName: 'Toy Proxy Server',
        projectDesc: 'A proxy server that can handle HTTP requests and responses, and can cache web pages to improve performance.',
        tags: ['Python','RFC','HTTP'],
        code: 'https://github.com/WanxiaJaneYang/ToyProxy',
        demo: '',
        image: server
    },
    {
        id: 6,
        projectName: 'Distributed Routing Algorithm',
        projectDesc: 'A distributed routing algorithm that can find the shortest path for each router given a network topology',
        tags: ['Python','Distributed Routing Algorithm'],
        code: 'https://github.com/WanxiaJaneYang/RoutingTableCalculator',
        demo: '',
        image: routing
    },
    {
        id: 7,
        projectName: 'Selective Repeat Protocol',
        projectDesc: 'A communication system that ensures information sent over the internet reaches its destination correctly, even when some data gets lost or corrupted.',
        tags: ['C','Transportation Protocol'],
        code: 'https://github.com/WanxiaJaneYang/Selective_Repeat',
        demo: '',
        image: protocol
    },
    {
        id: 8,
        projectName: 'Jack Compiler',
        projectDesc: 'A tool that translates human-friendly programming instructions(JACK) into a format that can be executed by a Virtual Machine.',
        tags: ['Java','VM Language','Jack Language'],
        code: 'https://github.com/WanxiaJaneYang/JackCompiler',
        demo: '',
        image: jack
    },
    {
        id: 9,
        projectName: 'Hack Assembler',
        projectDesc: 'A utility that transforms low-level programming language (HACK) into a format that can be directly understood by a computer system.',
        tags: ['C++','Machine Language'],
        code: 'https://github.com/WanxiaJaneYang/Hack-Assembler',
        demo: '',
        image: assembler
    },
    {
        id: 10,
        projectName: 'Virtual Machine Translator',
        projectDesc: 'A converter that takes instructions intended for a virtual machine (an emulation of a computer system) and translates them into a low-level language that a specific hardware can execute.',
        tags: ['C++','VM Language','Hack Assembly Language'],
        code: 'https://github.com/WanxiaJaneYang/VMTranslator/',
        demo: '',
        image: translator
    },
    {
        id: 11,
        projectName: 'Customized Scheduling Algorithm',
        projectDesc: 'A customized scheduling algorithm that can schedule tasks to achieve a balance among shortest response time, highest throughput and lowest turnaround time',
        tags: ['C++','Cpu Scheduling'],
        code: 'https://github.com/WanxiaJaneYang/Scheduler',
        demo: '',
        image: schedulor
    },
    {
        id: 12,
        projectName: 'Hanoi Tower Demo',
        projectDesc: 'A demo that can show the process of solving Hanoi Tower problem given the number of disks',
        tags: ['Java','Java Swing','GUI'],
        code: 'https://github.com/WanxiaJaneYang/HanoiTower',
        demo: '',
        image: hanoi
    },
    {
        id: 13,
        projectName: 'Format Converter and Checker',
        projectDesc: 'A tool for file conversion between different formats and verification of file format correctness.',
        tags: ['Python'],
        code: '',
        demo: '',
        image: format
    }


    // {
    //     id: 4,
    //     projectName: 'Android Patient Tracker',
    //     projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
    //     tags: ['Flutter', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: four
    // },
    // {
    //     id: 5,
    //     projectName: 'E-Commerce App',
    //     projectDesc: 'A Simple E-commerce application',
    //     tags: ['React Native', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five
    // },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/