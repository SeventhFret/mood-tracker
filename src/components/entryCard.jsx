import { Card, Title, Text, Group, Rating, Stack } from "@mantine/core";
import { GetEmptyIcon, GetFullIcon } from "./moodLevelSelector";
import dayjs from "dayjs";
import "dayjs/locale/uk";

const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const monthGenitiveUk = [
  "Cічня",
  "Лютого",
  "Березня",
  "Квітня",
  "Травня",
  "Червня",
  "Липня",
  "Серпня",
  "Вересня",
  "Жовтня",
  "Листопада",
  "Грудня",
];

export default function EntryCard(props) {
  dayjs.locale("uk");
  const { moodLevel, dateTime, notes, key } = props;
  const dateObj = dayjs(dateTime);
  const dayOfWeek = dateObj.format("dddd");
  const day = dateObj.format("D");
  const year = dateObj.format("YYYY");
  const time = dateObj.format("HH:mm");
  const dateString = `${capitalize(dayOfWeek)} ${day} ${
    monthGenitiveUk[dateObj.month()]
  } ${year} ${time}`;

  return (
    <Card key={key} bg="gray.8" shadow="sm" padding="lg" radius="md" w="50%">
      <Stack gap={5}>
        <Title order={4} c="gray.4">
          {dateString}
        </Title>
        <Group align="flex-start">
          <Text c="gray.4">Рівень настрою:</Text>
          <Rating
            p={0}
            m={0}
            readOnly
            emptySymbol={(value) => GetEmptyIcon(value, 25)}
            fullSymbol={(value) => GetFullIcon(value, 25)}
            highlightSelectedOnly
            value={moodLevel}
          />
        </Group>
        <Text size="sm" c="gray.5">
          {notes}
        </Text>
      </Stack>
    </Card>
  );
}
