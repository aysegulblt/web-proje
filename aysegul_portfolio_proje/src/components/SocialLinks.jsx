import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks({ profile }) {
  const links = [
    { href: profile?.social?.github, label: "GitHub", Icon: Github },
    { href: profile?.social?.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile?.email ? `mailto:${profile.email}` : "", label: "Email", Icon: Mail },
  ].filter((x) => x.href);

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex items-center justify-center rounded-full p-2 border border-border/60 bg-card/70 hover:bg-card/90 transition"
          aria-label={label}
          title={label}
        >
          <Icon className="w-4 h-4 text-[#91BADB]" />
        </a>
      ))}
    </div>
  );
}
