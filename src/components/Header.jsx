import headerJacket from "../assets/header-jacket.png";
import headerBag from "../assets/header-bag.png";
import headerShoes from "../assets/header-shoes.png";
const Header = () => {
  return (
    <div className="hero bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:w-[40%] items-center ">
          <div className="row-span-2 border-2 rounded-tl-4xl">
            <img src={headerJacket} alt="jacket" className="w-52" />
          </div>
          <div className="row-span-4 border-2 rounded-r-4xl">
            <img src={headerBag} alt="" className="w-52" />
          </div>
          <div className="row-span-2 border-2 rounded-bl-4xl row-start-3">
            <img src={headerShoes} alt="" className="w-52" />
          </div>
        </div>

        <div className="p-2 md:w-[60%] space-y-5">
          <h1 className="text-4xl text-secondary font-bold">
            Connecting Global Markets with Trust & Excellence
          </h1>
          <p>
            At ImXport, we bring the world closer by bridging the gap between
            exporters and importers. Our platform ensures that every transaction
            — from raw materials to finished goods — happens smoothly,
            transparently, and securely across international borders.
          </p>
          <p className="font-bold mb-4">connect with social media</p>
          <div className="space-x-6 flex flex-wrap space-y-4">
            <button className="btn btn-outline btn-primary">Facebook</button>
            <button className="btn btn-outline btn-primary">Instagram</button>
            <button className="btn btn-outline btn-primary">Thread</button>
            <button className="btn btn-outline btn-primary">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
