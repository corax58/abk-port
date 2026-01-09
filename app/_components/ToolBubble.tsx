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
      <TooltipTrigger></TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolBubble;
