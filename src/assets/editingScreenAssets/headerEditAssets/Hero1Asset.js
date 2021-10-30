import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';
import Hero1Css from './Hero1Asset.module.css'

export default function Hero1Asset() {
  const editorRef = useRef(null);
  return (
    <>
      <section className={`relative`}
      // style={{ background: color }}
      >
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          inline={true}
          key='Service4Im1'
          initialValue={`<img src="https://i.ibb.co/C8ZPc41/blog-15-770x545.png" alt="london" class="relative ${Hero1Css.bgImg} w-full h-full object-cover top-0"/>`}
          init={{
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
        <div className="absolute top-4 left-4 toBeRemoved">Click here to upload another image</div>
        {/* <TextH1 classStyle={Hero4Css.secHeroH1} text="Security Services"></TextH1> */}
        <h1 className="text-9xl text-white font-bold absolute top-80 left-48">
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='hero4ed1'
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue="Security"
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
        <div className={`bg-pink-300 absolute top-0 right-0 ${Hero1Css.bgImg}`}>
          <h1 className="text-9xl text-black font-bold absolute top-80 right-28">
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='hero4ed1'
              tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
              initialValue="Solutions"
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
      </section>
    </>
  )
}
