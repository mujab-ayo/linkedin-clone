import { profileData } from "./ProfileCard";
import postImage from "../feedbacks-template-ui.png";

function Post({ name, bio, date, text, image }) {
  const defaultText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.  #web3 #freecodecamp #figmaambassador";

  return (
    <div className="border px-4 py-3 rounded-lg bg-white text-left">
      <div className="flex flex-row text-left items-start gap-x-3">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn"
          alt="avatar"
          width={48}
          height={48}
          style={{
            background: "navajowhite",
            borderRadius: "50%",
            border: "2px solid white",
          }}
        />
        <div className="leading-normal text-xs">
          <div className="text-sm font-semibold">
            {name ?? profileData.name}
          </div>
          <div>{bio ?? profileData.bio}</div>
          <div>{date ?? new Date().toISOString()}</div>
        </div>
      </div>

 
      <div className="text-sm py-4 leading-normal">{text ?? defaultText}</div>

      <div>
        <img
          src={image ?? postImage}
          alt="avatar"
          width={"auto"}
          height={"100%"}
          style={{
            width: "100%",
            background: "navajowhite",
            borderRadius: "8px",
            border: "2px solid white",
          }}
        />
      </div>
    </div>
  );
}

export default Post;
