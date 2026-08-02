const lastcall = "/projects/LastCall.png";
const site = "/projects/site_home.png";
const siteAbout = "/projects/site_aboutme.png";



const duck = "/projects/proDUCKtive.jpg";
const duckView = "/projects/proDUCKtive_view.png";

const jeffGame = "/projects/jeff_game.png";
const jeffOpening = "/projects/jeff_opening.png";
const nepguinGame = "/projects/nepguin_game.png";
const nepguinOpening = "/projects/nepguin_opening.png";


const BE = "/projects/Behaviour/behaviour.jpg"
const BE1 = "/projects/Behaviour/BE1.jpg"

const PPE = "/projects/PPE/PPE.png"
const PPEVideo = "/projects/PPE/PPE.mp4"
const PPE1 = "/projects/PPE/PPE1.png"
const PPE2 = "/projects/PPE/PPE2.png"
const PPE3 = "/projects/PPE/PPE3.png"

const PDD = "/projects/PDD/PDD.png"
const PDDVideo = "/projects/PDD/PDDVideo.mp4"
const pdd1 = "/projects/PDD/pdd1.png";
const pdd2 = "/projects/PDD/pdd2.png";
const pdd3 = "/projects/PDD/pdd3.png";
const pdd4 = "/projects/PDD/pdd4.png";

const UF = "/projects/Underfished/UF.png"
const UF1 = "/projects/Underfished/underfished1.png"
const UF2 = "/projects/Underfished/underfished2.png"
const UF3 = "/projects/Underfished/underfished3.png"

const SS = "/images/abstractblue.jpg"

const PokeShin = "/projects/PokeShin/PokeShin.png"
const pokeshin1 = "/projects/PokeShin/pokeshin1.png"
const pokeshin2 = "/projects/PokeShin/pokeshin2.png"
const pokeshin3 = "/projects/PokeShin/pokeshin3.png"
const pokeshin4 = "/projects/PokeShin/pokeshin4.png"

const shelly = "/projects/Shelly/Shelly.png";
const shellyVideo = "/projects/Shelly/shelly.mp4";
const shelly1 = "/projects/Shelly/shelly1.png";
const shelly2 = "/projects/Shelly/shelly2.png";

const producktive = "/projects/producktive/proDUCKtive.jpg";
const producktive1 = "/projects/producktive/producktive1.png";
const producktive2 = "/projects/producktive/producktive2.jpg";
const producktive3 = "/projects/producktive/producktive3.jpg";

const martlet = "/projects/martlet/martlet.jpg";
const martlet1 = "/projects/martlet/martlet1.png";
const martlet2 = "/projects/martlet/martlet2.jpg";

const placeholderVideo = "/videos/placeholder.mp4"

export const projects = [

    {
        name: "Unannounced AAA Game - Behaviour",
        slug: "behaviour",
        date: "May 2026 - Aug 2026",

        previewPositionY: "50%",
        previewImage: BE,
        media: [
            {
                type: "image",
                src: BE1,
            },
        ],

        category: "App Development",
        descriptors: "Unreal, C++, UI/UX, Internship",
        tools: "Unreal Engine 5.8, C++, Slate/UMG, MVVM, Figma, Jira/Confluence, Perforce4V",
        overview: "Summer internship as a UI Programmer at Behaviour Interactive working on an unannounced AAA title.",
        contribution: "Integrated with the rest of the UI/UX team (designers, artists, product, and programmers). I also used Jira and Confluence for project management/tracking.",
        
        links: [
        ]
    },

    {
        name: "Pose Pose Execution",
        slug: "pose-pose-execution",
        date: "Jan 2026 - Apr 2026",
        
        previewPositionY: "0%",
        previewImage: PPE,
        previewVideo: [PPEVideo],
        media: [
            {
                type: "image",
                src: PPE2,
            },
            {
                type: "image",
                src: PPE3,
            },
            {
                type: "image",
                src: PPE1,
            },
            {
                type: "video",
                src: PPEVideo,
            },
        ],

        descriptors: "Unity, C#, UI/UX, Gameplay",
        tools: "Unity, C#, UI/UX, Gameplay, Figma, Miro",
        overview: <>
            Pose Pose Execution is a 1v1 rhythm fighting game, inspired by dance battles and music of the 80s/90s. The game was a submission to the Ubisoft GameLab Competition 2026, and won both the <strong>Best User Experience</strong> 
            and <strong>Audience Awards</strong>, along with being nominated for 6 awards in total including Best Game, Best Gameplay Design and more.
        </>,
        contribution: "TBA",

        links: [
            {
                link: "https://flyingsheep22.itch.io/pose-pose-execution",
                name: "Itch.io",
            }
        ]
    },

    {
        name: "Pas de Deux: The Chaos Ballet",
        slug: "pas-de-deux",
        date: "Jan 2025 - Apr 2025",
        
        previewPositionY: "0%",
        previewImage: PDD,
        previewVideo: [PDDVideo],
        media: [
            {
                type: "image",
                src: pdd1,
            },
            {
                type: "image",
                src: pdd2,
            },
            {
                type: "image",
                src: pdd3,
            },
            {
                type: "video",
                src: PDDVideo,
            },
        ],

        descriptors: "Unity, C#, UI/UX, Gameplay",
        tools: "Unity, C#, UI/UX, Figma, Procreate",
        overview: <>
        Co-op Comedy Ballerina Game submitted to the 2025 Ubisoft Game Lab Competition on behalf of McGill University,
        winner of the <b>Jury's Award</b>. Developed across 10 weeks in a team of eight (four programmers, three artists and one designer). Acted as
        the lead UI/UX developer and designer, as well as general gameplay prorammer. Was responsible
        for developing all menus, in-game HUD and user experience feedback, as well as camera and object interactions systems.
        </>,
        contribution: "TBA",

        links: [
            {
                link: "https://typh0n4.itch.io/pas-de-deux-the-chaos-ballet",
                name: "Itch.io",
            }
        ]
    },

    {
        name: "Underfished",
        date: "Nov 2025",
        slug: "underfished",
        
        previewPositionY: "38%",
        previewImage: UF,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: UF1,
            },
            {
                type: "image",
                src: UF2,
            },
            {
                type: "image",
                src: UF3,
            },
            {
                type: "youtube",
                src: "7sallYFhBzQ",
            },

        ],

        descriptors: "Unity, C#, UI/UX, Gameplay",
        tools: "Unity, C#",
        overview: "Horror survival fishing game developed with a team of four in under 36 hours for McGill CodeJam 15, <b>winner of the Best Game Prize.</b> " +
        "Acted as lead programmer for the project, responsible for core fishing gameplay, UI, and cutscene sequencing.",
        contribution: "TBA",
        
         links: [
            {
                link: "https://averageosiris.itch.io/underfished",
                name: "Itch.io",
            }
        ]
    },

    {
        name: "SwimmingSheep .com",
        date: "Sep 2024 - Present",
        slug: "swimmingsheep-com",

        previewPositionY: "0%",
        previewImage: SS,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: UF1,
            },
            {
                type: "image",
                src: UF2,
            },
            {
                type: "youtube",
                src: "7sallYFhBzQ",
            },

        ],

        descriptors: "React, HTML/CSS, Web Design",
        tools: "React, HTML/CSS, Node.js",
        images: [site, siteAbout],
        overview: "The current wesbite you are visiting! Fully developed with React, and hand-designed with Figma.",
        contribution: "I am the sole designer and developer for this website. Throughout multiple iterations, I designed the layouts and components on Figma and brought them to life using React, finally hosting everything on a custom domain using Vercel.",
        
        links: [
            {
                link: "https://github.com/FlyingSheep22/swimmingsheep",
                name: "Github Repository",
            }
        ]
        
    },



    {
        name: "PokéShin",
        date: "Nov 2025 - Dec 2025",
        slug: "pokeshin",
        
        previewPositionY: "62%",
        previewImage: PokeShin,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: pokeshin1,
            },
            {
                type: "image",
                src: pokeshin2,
            },
            {
                type: "image",
                src: pokeshin3,
            },
            {
                type: "image",
                src: pokeshin4,
            },

        ],

        descriptors: "Unity, C#, Educational",
        tools: "Unity, C#, MVVM, Unity UI",
        overview: "Visual novel puzzle game developed for RELG 368 (Japanese Religions in Popular Culture) class final project. " +
        "Fully developed from scratch visual novel and investigation systems, drawing inspiration from games like Ace Attorney. " + 
        "Created an MVVM-powered backend UI system that is very reusable and flexible.",
        contribution: "TBA",
        
        links: [
            {
                link: "https://flyingsheep22.itch.io/pokeshin",
                name: "Itch.io Page",
            }
        ]
    },

    

    {
        name: "Shelly's Snack Search",
        date: "Jan 2025",
        slug: "shelly",

        previewPositionY: "2%",
        previewImage: shelly,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: shelly2,
            },
            {
                type: "image",
                src: shelly1,
            },
            {
                type: "video",
                src: shellyVideo,
            },
        ],
        
        descriptors: "Unity, C#, GameJam",
        tools: "Unity, C#, Unity Cinemachine",
        overview: "Arcade style 2.5D platformer game where you play as Shelly the spider collecting bugs around the map. Developed in 48 hours for McGameJam 2025 as one of the programmers " +
        "(consisting of four programmers, three artists and one designer). Was responsible for developing UI/HUD and Scene Management, Camera Management, Skin Changing System and other miscellaneous tasks.",
        contribution: "TBA",
        
        links: [
            {
                link: "https://flyingsheep22.itch.io/shellys-snack-search",
                name: "Itch.io Page",
            }
        ]
    },

    {
        name: "Last Call",
        date: "Aug 2024 - Dec 2024",
        slug: "last-call",
        
        previewPositionY: "100%",
        previewImage: lastcall,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: pokeshin1,
            },
            {
                type: "image",
                src: pokeshin2,
            },
            {
                type: "image",
                src: pokeshin3,
            },
            {
                type: "image",
                src: pokeshin4,
            },

        ],

        descriptors: "Unity, C#, My First Game!",
        tools: "Unity, C#, Aseprite",
        overview: "Solo developed roguelike survival game passion project. Created using Unity, with all other assets drawn or sprited using Procreate and Aseprite. Extensively explored many different" +
             " Unity frameworks such as Cinemachine, UI and URP to create custom camera/lighting effects and cohesive, user-friendly UI, .",
        contribution: "TBA",
        
        links: [
            {
                link: "https://flyingsheep22.itch.io/last-call",
                name: "Itch.io Page",
            }
        ]
        
    },

    {
        name: "Marteler la Martlet",
        date: "Jan 2025",
        slug: "martlet",

        previewPositionY: "15%",
        previewImage: martlet,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: martlet1,
            },
            {
                type: "image",
                src: martlet2,
            },
            {
                type: "youtube",
                src: "A3J_Had7PEA",
            },

        ],

        descriptors: "Unity, C#, Hackathon",
        tools: "Unity, C#, Unity UI",
        overview: "Idle clicker-game inspired by McGill's beloved mascot, developed in 24 hours as part McHacks 12. Winner of the Chaotic Evil Hack Prize.",
        contribution: "TBA",

        links: [
            {
                link: "https://devpost.com/software/marteler-le-martelet",
                name: "Devpost Page",
            },
            {
                link: "https://flyingsheep22.itch.io/marteler-le-martelet",
                name: "Itch.io Page",
            },
        ]
        

    },

    {
        name: "ProDUCKtive",
        date: "Nov 2024",
        slug: "producktive",
        category: "App Development",

        previewPositionY: "50%",
        previewImage: producktive,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: producktive1,
            },
            {
                type: "image",
                src: producktive2,
            },
            {
                type: "image",
                src: producktive3,
            },
            {
                type: "youtube",
                src: "r8t2i7bmOiU",
            },

        ],

        descriptors: "Unity, C#, Figma, Hackathon",
        tools: "Unity, C#, .NET Interop Services",
        images: [duck, duckView],
        overview: "Desktop Overlay Companion with Pomodoro and wellness checks through periodic self-care reminders. Developed fully in Unity using the UI system for all screens and transitions, " +
         "as well as Microsoft's Interop Services to crete a fully functionning background overlay. Created in 36 hours with two teammates during McGill CodeJam 2024.",
        contribution: "TBA",
        
        links: [
            {
                link: "https://devpost.com/software/producktive",
                name: "Devpost Page",
            }
        ]
    },

    {
        name: "Nepguin",
        date: "Dec 2023",
        slug: "",

        previewPositionY: "50%",
        previewImage: nepguinOpening,
        previewVideo: [placeholderVideo],
        media: [
            {
                type: "image",
                src: pokeshin1,
            },
            {
                type: "image",
                src: pokeshin2,
            },
            {
                type: "image",
                src: pokeshin3,
            },
            {
                type: "image",
                src: pokeshin4,
            },

        ],


        descriptors: "Godot, Procreate, GameJam",
        category: "Game Development",
        tools: "Godot, GDScript",
        images: [nepguinOpening, nepguinGame],
        overview: "Two-player cozy winter themed game about a penguin who charms snowmen to attack for it. Developed as a first Godot game in a team of four across 48 hours for Winter Melonjam 5. " +
        "Contributed to UI and Upgrade systems, and created all handrawn 2D Assets and UI visuals using Procreate.",
        
        links: [
            {
                link: "https://realdevfrog.itch.io/nepguin",
                name: "Itch.io Page",
            }
        ]
        
    },
    

];