import { GithubButton } from "./github-button";
import { IconLinkButtonProps } from "./icon-link-button.types";
import { LinkedInButton } from "./linkedin-button";
import { LogoButton } from "./logo-button";
import { NpmjsButton } from "./npmjs-button";
import { SettingsButton } from "./settings-button";

export const IconLinkButton = ({ variant, ...props }: IconLinkButtonProps) => {
  if (variant === "github") return <GithubButton {...props} />;
  else if (variant === "linkedin") return <LinkedInButton {...props} />;
  else if (variant === "npmjs") return <NpmjsButton {...props} />;
  else if (variant === "logo") return <LogoButton {...props} />;
  else if (variant === "settings") return <SettingsButton {...props} />;
};
