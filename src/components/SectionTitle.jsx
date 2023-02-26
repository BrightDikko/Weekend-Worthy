import React from "react";

const SectionTitle = (props) => {
    console.log(props.title);
    return (
        <div className=" py-40 px-16 mx-auto">
            <p className="text-center font-serif mb-20 font-extrabold text-black text-3xl ">
                {props.emoji}
            </p>
            <p className="text-center font-serif font-extrabold text-black text-6xl ">
                {props.title}
            </p>
        </div>
    );
};

export default SectionTitle;
