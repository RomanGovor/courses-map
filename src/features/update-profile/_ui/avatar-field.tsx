import { Button } from "@/shared/ui/button";
import { ProfileAvatar } from "@/entities/user/profile";

export function AvatarField({ value }: { value?: string }) {
  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
    >
      <ProfileAvatar
        className="w-full h-full"
        profile={{ email: "admin.test@gmail.com", image: value }}
      />
    </Button>
  );
}
