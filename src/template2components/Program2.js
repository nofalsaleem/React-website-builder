import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Program2moduleCss from "./Program2.module.css";
import { Editor } from "@tinymce/tinymce-react";

export const Program2 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef();

  return (
    <>
      <section style={{ background: currentBackground }}>
        <section style={{ background: currentBackground }}>
          <section className={`${Program2moduleCss["head-main"]}`} style={{ background: currentBackground }}>
            <h1 className={`${Program2moduleCss.MainHeading}`}>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                inline={true}
                key="About(2)55"
                tinymceScriptSrc={
                  process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                }
                initialValue={`<span class="${Program2moduleCss.SpanColor}">OUR  </span> PROGRAMS`}
                init={{
                  plugins: [
                    "link"
                  ],
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect | lineheight',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                }}
              />
            </h1>{" "}
            <div className={`${Program2moduleCss.spanDesc}`}>
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                inline={true}
                key="Program(2)1"
                tinymceScriptSrc={
                  process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                }
                initialValue={`<p>  Our Programs are best in town and premium Lorem ipsum dolor sit amet.</p>`}
                init={{
                  plugins: [
                    "link"
                  ],
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect | lineheight',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                }}
              />
            </div>
            <div className={`${Program2moduleCss.divMainHeading}`}>
              <div
                className={`${Program2moduleCss.divMainHeadingSubDiv}`}
                data-aos="fade-left"
              ></div>{" "}
              <img src="https://i.ibb.co/VBwYpF5/dot.png" className={`${Program2moduleCss.dot}`} alt="del" />
              <div
                className={`${Program2moduleCss.divMainHeadingSubDiv}`}
                data-aos="fade-right"
              >
                {" "}
              </div>
            </div>
          </section>
          <section
            className={`${Program2moduleCss["our-experience"]}`}
            data-aos="fade-up"
          >
            <div className={`${Program2moduleCss["container-experience"]}`}>
              <div
                className={`${Program2moduleCss["exp-card1"]} ${Program2moduleCss.pp} ${Program2moduleCss["pp-2"]}`}
              >
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                  <lord-icon src="https://cdn.lordicon.com/avyixiri.json" trigger="hover"
                    colors="primary:#121331,secondary:#ffffff" style={{ "width": "100px", "height": "100px" }}>
                  </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Insider Threat: Resilience"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                      }}
                    />
                  </h2>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)11"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people may develop increased risks associated with an insider threat.</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
               
              </div>
              <div className={`${Program2moduleCss["exp-card2"]} ${Program2moduleCss.pp}`}  >
                <div className={`${Program2moduleCss["card-top"]}`}>
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                  <lord-icon src="https://cdn.lordicon.com/pyssajqq.json" trigger="hover"
                    colors="primary:#121331,secondary:#c0272d" style={{ "width": "100px", "height": "100px" }}>
                  </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)8"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Military Virtual Awareness Training"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                      }}
                    />
                  </h2>
                </div>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)12"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
                {/* <p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p> */}
              </div>
              <div
                className={`${Program2moduleCss["exp-card3"]} ${Program2moduleCss.pp} ${Program2moduleCss["pp-2"]}`}>
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                  <lord-icon src="https://cdn.lordicon.com/smwedssn.json" trigger="hover"
                    colors="primary:#121331,secondary:#ffffff" style={{ "width": "100px", "height": "100px" }}>
                  </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)3"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Cultural Awareness in the Workplace"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                      }}
                    />
                  </h2>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)15"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
                {/* <p>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p> */}
              </div>
              <div
                className={`${Program2moduleCss["exp-card4"]} ${Program2moduleCss.pp}`}>
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                  <lord-icon src="https://cdn.lordicon.com/rwotyanb.json" trigger="hover"
                    colors="primary:#121331,secondary:#c0272d" style={{ "width": "100px", "height": "100px" }}>
                  </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)6"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Cultural Awareness in the Workplace"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                      }}
                    />
                  </h2>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)13"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about cultural awareness in the workplace</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
              </div>
              <div className={`${Program2moduleCss["exp-card5"]} ${Program2moduleCss.pp} ${Program2moduleCss["pp-2"]}`}>
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                  <lord-icon src="https://cdn.lordicon.com/akbjoiow.json" trigger="hover"
                    colors="primary:#121331,secondary:#ffffff" style={{"width":"100px","height":"100px"}}>
                  </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)4"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Insider Threat: Resilience"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                      }}
                    />
                  </h2>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)18"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people may develop increased risks associated with an insider threat.</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
              </div>
              <div
                className={`${Program2moduleCss["exp-card6"]} ${Program2moduleCss.pp}`}>
                <div className={`${Program2moduleCss["ecard-top"]}`}>
                <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="hover"
            colors="primary:#121331,secondary:#c0272d" style={{"width":"100px","height":"100px"}}>
          </lord-icon>
                  <h2>
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="Program(2)5"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue="Military Virtual Awareness Training"
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
                  </h2>
                </div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  inline={true}
                  key="Program(2)16"
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  initialValue={`<p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
                {/* <p>Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk in culturally diverse environments.</p> */}
              </div>
            </div>
          </section>
        </section>
      </section>
      <div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
        <GithubPicker
          triangle="top-right"
          onChangeComplete={(color) => {
            setCurrentBackground(color.hex);
          }}
        />
      </div>
    </>
  );
};
