// const pages = {
//     "template1pages": ["Home"],
//     "template2pages": ["Home", "About", "Sectors", "Services", "Contact"],
//     "template3pages": ["Home"],
//     "template4pages": ["Home", "Contact", "About"],
// }


const pages = {
    "template1pages": [
        {
            "groupName": "Home",
            "subpages": ["Home"]
        }
    ],
    "template2pages": [
        {
            "groupName": "Home",
            "subpages":["Home"]
        },
        {
            "groupName": "About",
            "subpages": ["About"]
        },
        {
            "groupName": "Sectors",
            "subpages": ["About", "Contact", "Property Management", "Home", "Home", "Home"]
        },
        {
            "groupName": "Services",
            "subpages": ["About"]
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