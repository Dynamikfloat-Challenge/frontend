"use client";

import { Form } from "radix-ui";
import { useRef } from "react";

function SearchBar({ onSubmit }) {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const value = inputRef.current?.value || "";
    onSubmit(value);
  }

  return (
    <Form.Root
      className="flex gap-4 items-center w-[460px] mb-[30px] h-[35px]"
      onSubmit={handleSubmit}
    >
      <Form.Field className="" name="terms">
        <div
          style={{
            minHeight: "20px",
          }}
        >
          <Form.Message
            className="text-[13px] text-red-700 opacity-80"
            match="valueMissing"
          >
            Please enter your search term
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="w-full inline-flex align-center justify-center rounded border-[blue-800] shadow-[0_0_0_1px_rgba(0,0,0,0.4)] px-[10px] h-[35px] leading-[1]"
            type="text"
            required
            ref={inputRef}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit className="mt-4" asChild>
        <div className="flex gap-2 h-full">
          <button
            className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-[1] font-medium bg-white hover:bg-purple-200 text-blue-800 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            type="submit"
          >
            Search
          </button>
          <button
            className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-[1] font-medium bg-white hover:bg-red-200 text-red-800 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            type="button"
            onClick={() => {
              onSubmit("");
              inputRef.current.value = "";
            }}
          >
            Clear
          </button>
        </div>
      </Form.Submit>
    </Form.Root>
  );
}

export default SearchBar;
