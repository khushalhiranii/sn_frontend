import PropTypes from "prop-types";
import React, { useState } from "react";

export const Content = ({ className = "" }) => {

  const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = { email, password };

        try {
          const url=`${import.meta.env.VITE_API_URL}/api/v1/admin/login`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            console.log(credentials)
            // console.log(response.headers.getSetCookie())
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            

            

            const data = await response.json();
            console.log('Success:', data);
            const url2=`${import.meta.env.VITE_API_URL}/api/v1/data`;
            const response2 = await fetch(url2, {
              method: 'GET',
              credentials: 'include'
              
          }).then(response => response.json())
          .then(data => {
            console.log(data)
          });

        } catch (error) {
            console.error('Error:', error);
        }
    };
    

  return (
    <form onSubmit={handleSubmit}
      className={`m-0 flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-white overflow-hidden flex flex-col items-start justify-start pt-[4rem] px-[1.437rem] pb-[4rem] box-border gap-[4.687rem] min-w-[22.688rem] max-w-full mq450:gap-[1.188rem] mq450:min-w-full mq700:gap-[2.313rem] mq925:flex-1 mq925:pt-[2.625rem] mq925:pb-[7.875rem] mq925:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.25rem]">
        <div className="relative text-[2.25rem] font-medium font-inter text-black text-left inline-block min-w-[6.188rem] mq450:text-[1.375rem] mq925:text-[1.813rem]">
          Hello!
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <div className="relative text-[1.25rem] font-inter text-black text-left inline-block min-w-[4.25rem] mq450:text-[1rem]">
          User id
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[3.063rem] box-border min-w-[15.625rem] border-[1px] border-solid border-gray"
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <div className="relative text-[1.25rem] font-inter text-black text-left inline-block min-w-[5.813rem] mq450:text-[1rem]">
          Password
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[3.063rem] box-border min-w-[15.625rem] border-[1px] border-solid border-gray"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem]">
        <button type="submit" className="cursor-pointer [border:none] py-[0.625rem] px-[4.937rem] bg-foundation-red-normal rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumvioletred">
          <a className="[text-decoration:none] relative text-[1.25rem] font-medium font-inter text-white text-left inline-block min-w-[3.625rem]">
            Log in
          </a>
        </button>
      </div>
      
    </form>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

