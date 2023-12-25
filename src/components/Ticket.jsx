/* eslint-disable react/prop-types */

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket  py-2 shadow-md">
      <div className="flex justify-start items-center px-3 pb-4">
        <input type="checkbox" className="w-[45px]" />
        <span className="italic text-[#1b3b15] font-semibold text-lg ml-2">
          {ticket.name}
        </span>
      </div>
      <div className="  ticket_bg">
        <div className="h-[300px] md:h-[240px] lg:h-[180px]  text-center shadow-sm flex flex-col justify-center items-center border-dashed border-b-[0.7px] border-primary">
          <div className="relative h-[50px] bg-[#d7e5cb] w-[55px] rounded-full">
            <div className="bg-[#5d9b2a] h-[40px] w-[40px] left-[5px] top-[4.5px] rounded-full shadow-xl absolute inset-0">
              <span className="text-style font-extrabold font-sans text-[28px] pr-[2px]">
                V
              </span>
            </div>
          </div>

          <h2 className="pt-4 text-4xl italic text-[#1b3b15] font-extrabold">
            {ticket.number}
          </h2>
        </div>
      </div>
    </div>

    // <div className="ticket">
    //   <div className="ticket__content">
    //     <p className="ticket__text">Pure CSS Ticket</p>
    //   </div>
    // </div>
  );
};

export default Ticket;
