import { updateService1Array } from "../template1components/Navbar1";

const pages = {
    "template1pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        },
        {
            "groupName": "About",
            "subpages" :["About"]
        },
        {
            "groupName": "Services",
            // "subpages" :["Static Security", "Mobile Patrolling", "CCTV Monitoring", "Lock & Unlock", "Vacant Unit Checks", "Technology Product", "Manned Guarding", "Support & Management", "Event Security"]
            "subpages": [updateService1Array()]
        },
        {
            "groupName": "Contact",
            "subpages" :["Contact"]
        },
    ],
    "template2pages": 
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
        {
            "groupName": "About",
            "subpages": ["About"]
        },
        {
            "groupName": "Contact",
            "subpages": ["Contact"]
        },
    ],
    "template4pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        },
        {
            "groupName": "About",
            "subpages": ["About"]
        },
        {
            "groupName": "Contact",
            "subpages": ["Contact"]
        },
        
    ],
}
export default pages;