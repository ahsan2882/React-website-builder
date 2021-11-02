// import pages from '../editorScreen/TemplatePages'

import { templateComponents } from "../myComponents/AllTemplates";

const navbar2 = [
    // homeLinks:["Home"],
    // aboutLinks: ["Our Vision","Our Experience", "Our Policies", "Our Prices", "Our Accreditations", "Our Team", "Our Partners"],
    // sectorLinks: ["Construction", "Corporate", "Industrial", "Retail", "Logistics", "Property Management"],
    // serviceLinks: ["Static Security", "Mobile Patrolling", "CCTV Monitoring", "Lock & Unlock", "Vacant Unit Checks", "Technology Product", "Manned Guarding", "Support & Management", "Event Security", "Guard House"],
    // contactLinks: ["Contact"]
    // homeLinks: pages.template2pages.filter((item) => item.groupName === "Home").map((item) => item.subpages.map((items) => items)[0]),
    // aboutLinks:pages.template2pages.filter((item) => item.groupName === "About").map((item) => item.subpages.map((items) => items)[0])
    {
        sectionName: "home",
        subSections: templateComponents.template2Components.filter((item) => item.groupName === "home").map((item) => item.pageName),
        isLink: false
    },
    {
        sectionName: "about",
        subSections: templateComponents.template2Components.filter((item) => item.groupName === "about").map((item) => item.pageName),
        isLink: true
    },
    {
        sectionName: "sectors",
        subSections: templateComponents.template2Components.filter((item) => item.groupName === "sectors").map((item) => item.pageName),
        isLink: false
    },
    {
        sectionName: "services",
        subSections: templateComponents.template2Components.filter((item) => item.groupName === "services").map((item) => {
            return {
                pageName: item.pageName,
                isLink: true,
            }
        }),
        isLink: false
    }
]
export default navbar2;