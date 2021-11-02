import navbar2 from "../template2components/nav2Edits";

const pages = {
    "template1pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        }
    ],
    "template2pages": 
        navbar2.map((item) => {
            return {
                "groupName": item.sectionName,
                "subpages": item.subSections
            }
        }),
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