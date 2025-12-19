import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  name: string;
  imageLink: string;
  needRound?: boolean;
}
const ToolBubble = ({ name, imageLink, needRound }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="  shadow-md hover:scale-110 transition-all  h-min  border-border border rounded-full p-2 overflow-clip">
          <div className="relative ">
            <div className=" w-full h-full flex ">
              <div className="absolute w-5 h-5 blur-md  rounded-full bg-white"></div>
            </div>
            <img
              src={imageLink}
              className={`size-14  ${needRound == false ? "" : "rounded-full"}`}
            ></img>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolBubble;
