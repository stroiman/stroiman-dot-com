import Link from "next/link";
import { Lang, useTranslation } from "../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";

export default async function Links({
  lng,
  className,
}: {
  lng: Lang;
  className?: string;
}) {
  const { t } = await useTranslation(lng);
  return (
    <div className={clsx("inline space-x-2", className)}>
      <Link
        href="https://linkedin.com/in/stroiman"
        target="_blank"
        className="hover:opacity-90"
        aria-label={t("links.linkedInLinkLabel")}
      >
        <FontAwesomeIcon icon={faLinkedin} className="inline h-[1em]" />
      </Link>
      <Link
        href="https://github.com/stroiman"
        target="_blank"
        className="hover:opacity-90"
        aria-label={t("links.githubLinkLabel")}
      >
        <FontAwesomeIcon icon={faGithub} className="inline h-[1em]" />
      </Link>
    </div>
  );
}
