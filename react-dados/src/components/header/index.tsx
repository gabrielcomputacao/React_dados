import logoTechBiz from "@/assets/LogoTech.png";

export function Header() {
  return (
    <div className="py-5 px-10 h-20  border-b shadow-sm w-full">
      <div>
        <div className="w-[160px] h-10">
          <img
            className="w-full h-full"
            src={logoTechBiz}
            alt="TechBiz"
            title="TechBiz"
          />
        </div>
      </div>
    </div>
  );
}
