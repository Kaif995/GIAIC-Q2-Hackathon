export default function FooterLinkSection({ title, links }) {
  return (
    <div className="flex flex-col leading-none">
      <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
        {title}
      </div>
      <div className="flex flex-col mt-5 text-base text-slate-800">
        {links.map((link) => (
          <div
            key={link.id}
            className={`mt-3 ${
              link.isActive
                ? "text-cyan-700 underline decoration-auto decoration-solid underline-offset-auto"
                : ""
            }`}
          >
            {link.text}
          </div>
        ))}
      </div>
    </div>
  );
}
