import React, { useRef , useState} from 'react'
import About1Css from './About1.module.css'
import buss from '../assets/template1images/img-commited-to-business.png'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';

export const About1 = ({ showPopup, overSection }) => {
  const editorRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState("white");

  return (
    <>
<div style={{ background: currentBackground }}>
      <div  className={`${About1Css['text-main-text']}`}>
        <h1 style={{ color: `black` }} className={`${About1Css.headings}`}>
            <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='abouT1'
            initialValue="About Our Company"
            init={{
              forced_root_block: "",
              menubar: false,
              toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
            }}
          />
        </h1>
        <div className={`${About1Css.subhead}`}>

        
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About2'
              initialValue="<p>Security was founded by a squad of retired soldiers and friends who wanted to make this world a safer place.</p>"
              init={{
                forced_root_block: "",
                menubar: false,
                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
              }}
            /> 
        </div>
      </div>

      <div style={{ background: currentBackground }} className={`${About1Css.container9}`}>
        <div style={{ background: currentBackground }} className={` mt-36 ${About1Css.row}`}>
        <div style={{ background: currentBackground }} className="container9-content">
      
          <span className={`${About1Css['headline_content2']}`}><span><b>Commited To</b> Your Business</span></span>
          {/* <p className={`${About1Css['testimonial-text']}`}> */}
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About3'
              initialValue={`<p class="${About1Css['testimonial-text']}">Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.</p>`}
              init={{
                forced_root_block: "",
                menubar: false,
                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
              }}
            />

          {/* </p> */}
          <div className={`${About1Css.author2}`}>
            <button className={`${About1Css.btna}`}>

              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About4'
                initialValue="View our Portfolio"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </button>
          </div>
        </div>

        <div className={`${About1Css['container11-image']}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='About5'
            initialValue={`<img src=${buss} alt="Temp1Img1" class="w-18/>`}
            init={
              {
              images_upload_handler: function (blobInfo, success, failure) {
                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
            },
            images_upload_url: '/upload-images',

              forced_root_block: "",
              menubar: false,
              plugins: [
                "image"
              ],
              toolbar: 'image'
            }}
          />

        </div>
        </div>
      </div>
      </div>
      <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
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