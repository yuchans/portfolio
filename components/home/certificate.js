import { useState } from "react";

export default function Certificate() {
    const [certificate] = useState([
        {
            name: "전자출판 기능사",
            dec: "한국산업인력공단",
            date: "2016.07",
        },
        {
            name: "컴퓨터그래픽스 운용 기능사",
            dec: "한국산업인력공단",
            date: "2015.12",
        },
        {
            name: "GTQ 포토샵 1급",
            dec: "한국생산성본부",
            date: "2014.10",
        },
        {
            name: "GTQ 일러스트 1급",
            dec: "한국생산성본부",
            date: "2014.06",
        },
    ]);
    return (
        <div className="container mx-auto my-24 sm:my-32">
            <ol className="px-5 md:px-0 grid grid-cols-2 md:grid-cols-4">
                {certificate.map((item, index) => (
                    <li key={index} class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div class="mt-3 sm:pr-8">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">{item.dec}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
