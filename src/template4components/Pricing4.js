import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import Pricing4Css from './Pricing4.module.css'

export default function Pricing4() {
    const editorRef = useRef(null);
    return (
        <div className="py-20 px-0 w-full">
            <div className={Pricing4Css.containerMainPrice}>
                <div className="flex flex-col items-center py-10 px-0">
                    {/* <TextH2 className={`text-2xl ${Pricing4Css.pricingPlanHead}`} text="Reasonable Pricing Plans" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='price4ed1'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h2>Reasonable Pricing Plans</h2>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | formatselect',
                        }}
                    />
                    {/* <TextH1 className={`text-5xl text-center ${Pricing4Css.pricingPlanSubhead}`} text="Our Pricing" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='price4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h1>Our Pricing</h1>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | formatselect',
                        }}
                    />
                </div>

                <div className={`flex flex-wrap justify-center px-0 ${Pricing4Css.container1}`}>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        {/* <TextH1 className={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Personal security" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        {/* <TextH2 className="flex justify-center items-center text-5xl text-black text-center" text="Start" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed4'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>Start</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div>
                            <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>
                                <li className="p-1">
                                    {/* <IconText classStyle="fas fa-check" text=" CCTV Service" /> */}
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed5'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>CCTV Service</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                <li className="p-1">
                                    {/* <i className="fas fa-times"></i> Alarm signaling */}
                                    {/* <IconText classStyle="fas fa-times" text=" Alarm signaling" /> */}
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed6'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                <li className="p-1">
                                    {/* <i className="fas fa-check"></i> Access control */}
                                    {/* <IconText classStyle="fas fa-check" text=" Access Control" /> */}
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed7'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Access Control</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                <li className="p-1">
                                    {/* <i className="fas fa-times"></i> Alarm signaling */}
                                    {/* <IconText classStyle="fas fa-times" text=" Alarm signaling" /> */}
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed8'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-5">
                            {/* <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='price4ed9'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Get Quote</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1> */}
                        {/* <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>Medium</span>
                                </h2> */}
                        {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" /> */}
                        {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="Medium" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed10'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed11'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>Start</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div>
                            <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>
                                {/* <li className="p-1"><IconText classStyle="fas fa-check" text=" CCTV Service" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        key='price4ed12'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>CCTV Service</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed13'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed14'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Access Control</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed15'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-5">
                            {/* <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='price4ed16'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Get Quote</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`border-2 border-solid border-black bg-black flex flex-col items-center p-5 m-2 ${Pricing4Css.pricingCards}`}>
                        {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Full Services</h1>
                                <h2 className="flex justify-center items-center text-5xl text-white text-center">
                                    <span>Pro</span>
                                </h2> */}
                        {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Full Services" /> */}
                        {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-white text-center" text="Pro" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed17'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed18'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>Start</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div>
                            <ul className="p-5 list-none">
                                {/* <li className="text-white p-1"><IconText classStyle="fas fa-check" text=" CCTV Service" /></li> */}
                                <li className="text-white p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed19'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>CCTV Service</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="text-white p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="text-white p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed20'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="text-white p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li> */}
                                <li className="text-white p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed21'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Access Control</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="text-white p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="text-white p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed22'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-5">
                            {/* <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='price4ed23'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Get Quote</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1>
                                <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>All in one</span>
                                </h2> */}
                        {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" /> */}
                        {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="All in one" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed24'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='price4ed25'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>Start</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div>
                            <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>
                                {/* <li className="p-1"><IconText classStyle="fas fa-check" text=" CCTV Service" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed26'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>CCTV Service</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed27'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed28'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Access Control</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                                {/* <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                <li className="p-1">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed29'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="<p>Alarm Signaling</p>"
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | formatselect',
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-5">
                            {/* <ButtonText className={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                key='price4ed30'
                                inline={true}
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Get Quote</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
