// import navbar2 from "../template2components/nav2Edits";

const pages = {
    "template1pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        },
        {
            "groupName": "About",
            "subpages" :["About"]
        }
    ],
    "template2pages": 
        // navbar2.map((item) => {
        //     return {
        //         "groupName": item.sectionName,
        //         "subpages": item.subSections
        //     }
        // }),
        [
            {
                "groupName": "Home",
                "subpages": ["Home"]
            },
            {
                "groupName": "About",
                "subpages": ["About"]
            },
            {
                "groupName": "Sectors",
                "subpages": ["Construction", "Corporate", "Industrial", "Retail", "Logistics", "Property Management"]
            },
            {
                "groupName": "Services",
                "subpages": ["Static Security", "Mobile Patrolling", "CCTV Monitoring", "Lock & Unlock", "Vacant Unit Checks", "Technology Product", "Manned Guarding", "Support & Management", "Event Security", "Guard House", "24/7 Surveillance"]
            },
            {
                "groupName": "Contact",
                "subpages": ["Contact"]
            },
        ],
    "template3pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        },
    ],
    "template4pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        },
        {
            "groupName": "Contact",
            "subpages": ["Contact"]
        },
        {
            "groupName": "About",
            "subpages": ["About"]
        },
    ],
}
export default pages;