import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
import formmoduleCss from './Form.module.css'
export default function Form({ showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
<>
<section  style={{ background: currentBackground }} className={`${formmoduleCss['contacts-wrapper']}`}>
        <section className={`${formmoduleCss['contact-us']} ${formmoduleCss.container}`}>
          <div className={`${formmoduleCss['left-section-contact']}`}>
            <div className={`${formmoduleCss['contact-address']}`}>
              <h1>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Addresses"
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
              <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${formmoduleCss.addr}">London Office</p>`}
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
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p>418-426 Lewisham High Street, SE13 6LJ</p>`}
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
        
              <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${formmoduleCss.addr}">Birmingham Office</p>`}
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
      <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={` <p>3 Brindley Place, B1 2JB</p>`}
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
              
             
             
              <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${formmoduleCss.addr}">Manchester Office</p>`}
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
            
              <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`  <p>Chancery Place, 50 Brown Street, M2 2JG</p>`}
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
            </div>
            <div className={`${formmoduleCss['phone-number']}`}>
              <h1>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Phone"
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
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.phonen}">London: 020 8690 1903</p>`}
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

              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.phonen}">Birmingham: 0121 824 1075</p>`}
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
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.phonen}">Birmingham: 0121 824 1076</p>`}
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
   
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.phonen}">Manchester: 0161 511 3397</p>`}
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
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.phonen}">Manchester: 0161 511 3398</p>`}
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
            </div>
            <div className={`${formmoduleCss.email}`}>
              <h1 className={`${formmoduleCss['email-heading']}`}>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Email"
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
              <button  className={`${formmoduleCss['email-addr']}`}>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="info@critrixconsultancy.com"
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
                  
                  
                  </button>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`<p class="${formmoduleCss.apply}">  For job applications please visit our
                            Careers page or send your CV and cover
                            letter to</p>`}
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
            
                <button>
                <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="info@critrixconsultancy.com"
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
                        /></button>
            
            </div>
          </div>
          <form method="POST" className={`${formmoduleCss.form}`}>
            <div className={`${formmoduleCss['form-intro']}`}>
              <h1>
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="We'd love to hear from you"
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
           
              <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`   <p>
                            Call, email or complete the form below and one of our team
                            members will contact you to discuss your requirements.
                          </p>`}
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
            </div>
            <div className={`${formmoduleCss['form-inputs']}`}>
              <input
                type="text"
                name="first-name"
                placeholder="First Name *"
                className={`${formmoduleCss.firstName} ${formmoduleCss['personal-details']}`}
              />
              <input
                type="text"
                name="last-name"
                placeholder="Last Name *"
                className={`${formmoduleCss.lastName} ${formmoduleCss['personal-details']}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className={`${formmoduleCss['email-input']} ${formmoduleCss['personal-details']}`}
              />
              <input
                type="text"
                name="mobile-number"
                placeholder="Mobile"
                className={`${formmoduleCss.phone} ${formmoduleCss['personal-details']}`}
              />
            </div>
            <textarea
              name="message"
              className={`${formmoduleCss['message-input']}`}
              rows="5"
              placeholder="Your Message or Enquiry *"
            ></textarea>
            <div className={`${formmoduleCss['submit-btn']}`}>
            <button className={`${formmoduleCss['submit-button']}`}> 
            <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Send"
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
        </button>
            </div>
          </form>
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
    )
}
