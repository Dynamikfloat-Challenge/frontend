"use client";

import { Form } from "radix-ui";
import { useState, useRef } from "react";
import { Badge } from "@radix-ui/themes";
import { createUser } from "../../../services/dynamik-backend";

function UserForm() {
  const [stacks, setStacks] = useState([]);
  const inputRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      nickname: formData.get("nickname"),
      birth_date: formData.get("birth_date"),
      stack: stacks,
    };
    await createUser(userData);
  };

  return (
    <div className="container mx-auto mt-20 p-4 w-full max-w-md flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Create New Developer</h1>
      <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
        <Form.Field className="mb-2.5 grid" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Name
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red-700 opacity-80"
              match="valueMissing"
            >
              Please enter your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-black outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="nickname">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Nickname
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red-700 opacity-80"
              match="valueMissing"
            >
              Please enter your nickname
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-black outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="birth_date">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px]">
              Birth Date
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red-700 opacity-80"
              match="valueMissing"
            >
              Please enter your birth date
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-black outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="date"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2.5 grid" name="stacks">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Stacks
          </Form.Label>
          <div className="flex items-center gap-2">
            <Form.Control asChild>
              <input
                className="box-border inline-flex h-[35px] appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] shadow-black outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                type="text"
                ref={inputRef}
              />
            </Form.Control>
            <button
              onClick={(event) => {
                event.preventDefault();
                const value = inputRef.current?.value || "";
                console.log(value);
                setStacks((prevStacks) => [...prevStacks, value]);
                inputRef.current.value = "";
              }}
              className="bg-purple-100 rounded text-blue-800 hover:bg-purple-200 p-1.5 w-[35px] h-[35px]"
            >
              +
            </button>
          </div>
        </Form.Field>
        <div className="flex flex-row flex-wrap gap-1">
          {stacks &&
            stacks.length > 0 &&
            stacks.map((stack) => <Badge key={stack}>{stack}</Badge>)}
        </div>
        <Form.Submit asChild>
          <button
            className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white hover:bg-purple-200 text-blue-800 px-[15px] font-medium leading-none shadow-[0_2px_10px] shadow-gray-400 focus:shadow-[0_0_0_2px] focus:shadow-gray-400 focus:outline-none"
            type="submit"
          >
            Create
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default UserForm;
