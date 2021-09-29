import React from 'react'
import FooterEditCss from './FooterEdit.module.css'
class FooterEdit extends React.Component {
    constructor() {
        super();
        this.state = { sideBar: false };
    }
    handleSidebar() {
        this.setState({
            sideBar: !this.state.sideBar
        });
    }
    render() {
        return (
            <div className="text-gray-600 body-font">
                <div className=" flex flex-col top-20 left-0 bg-white border-r	">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <span className={`inline-flex ${FooterEditCss.mlLeft} sm:mt-0 mt-4 justify-center sm:justify-start`}>
                            <button className={`whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6 ${FooterEditCss['navToggle']} ${this.state.sideBar ? "open" : null} fixed`} onClick={this.handleSidebar.bind(this)}>
                                <i className={`fas fa-plus-circle ${FooterEditCss['i-circle']}`}></i>
                            </button>
                            <nav>
                                <ul
                                    className={FooterEditCss.mainNav}
                                    style={
                                        this.state.sideBar
                                            ? { transform: "translateX(0)" }
                                            : null
                                    }>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Header</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Navigation</span>

                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Footer</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Testimonals</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Forms</span>
                                        </button>
                                    </li> <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Faq's</span>
                                        </button>
                                    </li> <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Contact</span>
                                        </button>
                                    </li> <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Social icons</span>
                                        </button>
                                    </li> <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Sliders</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Section Hero</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Pricing</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Sections</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                            <span className={`ml-2 text-sm tracking-wide truncate ${FooterEditCss.spanBtn}`}>Accreditation</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                onClick={this.handleSidebar.bind(this)}
                                className={`overlay ${this.state.sideBar ? "open" : ""}`} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterEdit;