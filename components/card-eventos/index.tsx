    import React, { useState, useRef, useEffect } from "react";
    import {
    AiOutlineCalendar,
    AiOutlineClockCircle,
    AiOutlineEdit,
    AiOutlineStar,
    AiOutlineCheck,
    } from "react-icons/ai";
    import { FiMapPin } from "react-icons/fi";
    import { BsTrash } from "react-icons/bs";
/*<CardEvent fsidfsifdasijodf joasdoijfpçasdljkfnlaisjd */

    interface CardEventProps {
    imageSrc: string;
    altText: string;
    theme: string;
    data: string;
    horario: string;
    local: string;
    }

    const CardEvent: React.FC<CardEventProps> = ({
    imageSrc,
    altText,
    theme,
    data,
    horario,
    local,
    }) => {
    const [showButtons, setShowButtons] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);

    const handleImageClick = () => {
        setShowButtons(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (imageRef.current && !imageRef.current.contains(event.target as Node)) {
        setShowButtons(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col items-center max-w-[300px] rounded overflow-hidden p-2.5">
        <div className="relative" ref={imageRef}>
            <img
            className={`w-full rounded-[10px] transition-opacity ${
                showButtons ? "opacity-50" : "opacity-100"
            }`}
            src={imageSrc}
            alt={altText}
            onClick={handleImageClick}
            />
            {showButtons && (
            <div className="absolute rounded-[10px] top-0 left-0 w-full h-full bg-black opacity-40"></div>
            )}
            {showButtons && (
            <div className="absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="bg-white text-[25px] flex items-center justify-center rounded-[100%] w-[50px] h-[50px] text-gray-500 px-4 py-2  mr-2">
                <AiOutlineEdit />
                </button>
                <button className="bg-white text-[20px] flex items-center justify-center rounded-[100%] w-[50px] h-[50px] text-gray-500 px-4 py-2  mr-2">
                <BsTrash />
                </button>
                <button className="bg-white text-[25px] flex items-center justify-center rounded-[100%] w-[50px] h-[50px] text-gray-500 px-4 py-2  mr-2">
                <AiOutlineStar />
                </button>
                <button className="bg-white text-[25px] flex items-center justify-center rounded-[100%] w-[50px] h-[50px] text-gray-500 px-4 py-2 ">
                <AiOutlineCheck />
                </button>
            </div>
            )}
        </div>
        <div className="pt-[0.5rem] pb-0">
            <div className="text-[0.9rem] whitespace-nowrap mt-[-3px] font-semibold mb-2 h-[18px]">
            {theme}
            </div>
        </div>
        <div className="flex">
            <div className="pl-[1rem]">
            <div className="font-normal text-[14px] flex gap-1 items-center">
                <AiOutlineCalendar />
                <p>{data}</p>
            </div>
            </div>
            <div className="pl-[1.25rem]">
            <div className="font-normal text-[14px] flex gap-1 items-center">
                <AiOutlineClockCircle />
                <p>{horario}</p>
            </div>
            </div>
            <div className="pl-[1.25rem]">
            <div className="font-normal text-[14px] flex gap-1 items-center whitespace-nowrap">
                <FiMapPin />
                <p>{local}</p>
            </div>
            </div>
        </div>
        </div>
    );
    };

export default CardEvent;
