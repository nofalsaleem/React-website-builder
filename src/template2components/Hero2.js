import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';

import Hero2moduleCss from './Hero2.module.css'
import { Navbar2 } from './Navbar2';
export const Hero2 = ({ displayDevice, showPopup, overSection }) => {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState("#c0272d");
    const [backgroundType, setBackgroundType] = useState("color");

    return (
        <>
            {/* <section style={{ background: currentBackground }}>
                <section className={`${Hero2moduleCss['slider-temp2']}`} >
                    <div className={`${Hero2moduleCss['slider__warpper']}`}>
                        <div className={`${Hero2moduleCss['flex__container']} ${Hero2moduleCss['flex--pikachu']} ${Hero2moduleCss['flex--active']}`}>
                            <img className={`${Hero2moduleCss['bg-line']}`} src="https://i.ibb.co/VwB7mhG/Path-7.png" alt="" />

                            <div className={`${Hero2moduleCss['{flex__item']} ${Hero2moduleCss['flex__item--left']}`} style={{ background: currentBackground }}>
                                <img className={displayDevice ? `${Hero2moduleCss.pokemonimg}` : `${Hero2moduleCss.pokemonimgM}`} src="https://i.ibb.co/9Wt8w45/guarg.png" alt="rhuis " />
                                <div className={`${Hero2moduleCss['flex__content']}`}>

                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='hero4ed2'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue={displayDevice ? `<p class="${Hero2moduleCss.textSub}">Security</p>` : `<p class="${Hero2moduleCss.textSubM}">Security</p>`}
                                        init={{
                                            plugins: [
                                                "link"
                                            ],
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                        }}
                                    />

                                    <h1 className={displayDevice ? `${Hero2moduleCss['text--big']}` : `${Hero2moduleCss['text--bigM']}`}>
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='hero(2)33'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="GUARD"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                            }}
                                        />
                                    </h1>
                                </div>
                                <p className={`${Hero2moduleCss['text__background']}`}>Security</p>

                            </div>


                        </div>



                    </div>


                </section>
            </section> */}
            <section className="overflow-hidden">
                {/* {backgroundType === "color" ? <HeroSection4ComponentColorImage color={currentBackgroundColor} /> : (backgroundType === "image" ? <HeroSection4ComponentColorImage image={currentBackgroundImage} /> : <HeroSection4ComponentVideo />)} */}
                {backgroundType === "color" ? <Hero2ColorComponent color={currentBackgroundColor} displayDevice={displayDevice} /> : null}
                {backgroundType === "image" ? <Hero2ImageComponent displayDevice={displayDevice} /> : null}
                {/* {backgroundType === "video" ? <HeroSection4ComponentVideo displayDevice={displayDevice} /> : null} */}
                <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                    <div className="flex flex-col justify-center items-center border-2 border-black w-64 rounded-lg bg-white">
                        <button className="py-4" onClick={() => setBackgroundType("color")}>Color</button>
                        {backgroundType === "color" ? <GithubPicker
                            triangle="top-right"
                            onChangeComplete={(color) => {
                                setBackgroundType("color")
                                setCurrentBackgroundColor(color.hex);
                            }}
                        /> : null}
                        <button className="py-2" onClick={() => setBackgroundType("image")}>Image</button>
                        <button className="py-4" onClick={() => setBackgroundType("video")}>Video</button>

                    </div>
                </div>
            </section>
        </>
    )
}

const Hero2ColorComponent = ({ color, displayDevice }) => {
    const editorRef = useRef(null);
    return (
        <>
            <section style={{ background: color }} className={`${Hero2moduleCss.heroSection} relative`}>
                <Navbar2 displayDevice={displayDevice} />
                <img src="https://i.ibb.co/VwB7mhG/Path-7.png" alt="Pah 7" className="w-full h-full" />
                {/* <img src="https://i.ibb.co/9Wt8w45/guarg.png" alt="guarg" border="0">*/}
                <section className="absolute bottom-8 right-1/4 z-10">
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        initialValue={`<img src="https://i.ibb.co/9Wt8w45/guarg.png" alt="logo" class="${Hero2moduleCss.guardImg} object-cover"/>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            images_upload_handler: function (blobInfo, success, failure) {
                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                            },
                            images_upload_url: '/upload-images',
                            plugins: [
                                "image"
                            ],
                            toolbar: 'image'
                        }}
                    />
                </section>
                <h1 className="absolute text-2xl text-white" style={{ left: "15%", top: "30%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="SECURITY"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
                </h1>
                <h1 className={`absolute text-white font-bold my-0 ${Hero2moduleCss.mainHead}`} style={{ zIndex: "1", left: "14%", top: "35%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="GUARD"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
                </h1>
            </section>
        </>
    )
}


const Hero2ImageComponent = ({ displayDevice }) => {
    const editorRef = useRef(null);
    // <img src="https://i.ibb.co/r786FyQ/guard1.png" alt="guard1" border="0">
    return (
        <>
            <section className={`relative ${Hero2moduleCss.heroSection}`}>
                <Navbar2 displayDevice={displayDevice} />
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='hero4ed2'
                    initialValue={`<img src="https://i.ibb.co/r786FyQ/guard1.png" alt="guard1" class=" w-full h-full object-cover"/>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <h1 className="absolute text-2xl text-white" style={{ left: "15%", top: "30%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="SECURITY"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
                </h1>
                <h1 className={`absolute text-white font-bold my-0 ${Hero2moduleCss.mainHead}`} style={{ zIndex: "1", left: "14%", top: "35%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="GUARD"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
                </h1>
            </section>
        </>
    )
}