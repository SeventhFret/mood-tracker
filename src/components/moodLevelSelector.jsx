import { Rating } from "@mantine/core";
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from "@tabler/icons-react";

const getIconStyle = (color, grade, iconSize) => ({
  width: iconSize,
  height: iconSize,
  color: color ? `var(--mantine-color-${color}-${grade})` : undefined,
});

export const GetEmptyIcon = (value, iconSize) => {
  const iconStyle = getIconStyle("gray", 0, iconSize);

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

export const GetFullIcon = (value, iconSize) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle("red", 7, iconSize)} />;
    case 2:
      return <IconMoodSad style={getIconStyle("orange", 7, iconSize)} />;
    case 3:
      return <IconMoodSmile style={getIconStyle("yellow", 7, iconSize)} />;
    case 4:
      return <IconMoodHappy style={getIconStyle("lime", 7, iconSize)} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle("green", 7, iconSize)} />;
    default:
      return null;
  }
};

export default function MoodLevelSelector(props) {
  const { moodLevel, setMoodLevel } = props;

  return (
    <Rating
      emptySymbol={(value) => GetEmptyIcon(value, 40)}
      fullSymbol={(value) => GetFullIcon(value, 40)}
      value={moodLevel}
      onChange={setMoodLevel}
      highlightSelectedOnly
    />
  );
}
