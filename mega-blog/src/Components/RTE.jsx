import React from "react";
import { Editor } from "tinymce";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            initialValue={defaultValue}
            value={value}
            onEditorChange={(content) => onChange(content)}
            init={{
              branding: false,
              height: 200,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "print",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "paste",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image",
              content_style:
                "body { font-faimly:helvetica,Arial,sans-serif; font-size:14px}",
            }}
          />
        )}
      />
    </div>
  );
}
