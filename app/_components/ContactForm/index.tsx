"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return <p>ありがとう</p>;
  }
  return (
    <form className="max-w-lg mx-auto p-8" action={formAction}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            姓
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            名
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          メールアドレス
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
      </div>
      <div>
        {state.status === "error" && <p>{state.message}</p>}
        <input
          type="submit"
          value="送信する"
          className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
        />
      </div>
    </form>
  );
}
