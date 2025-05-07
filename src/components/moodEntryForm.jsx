import dayjs from "dayjs";
import { useState } from "react";
import { Stack, Title, Text, Textarea, Button } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import MoodLevelSelector from "./moodLevelSelector";

export default function MoodEntryForm() {
  const [moodLevel, setMoodLevel] = useState(3);
  const currentDateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const [entryDateTime, setEntryDateTime] = useState(currentDateTime);
  const [notes, setNotes] = useState("");

  console.log(moodLevel)

  console.log(currentDateTime)

  return (
    <Stack>
      <Stack py="md" gap={2}>
        <Title order={4} c="gray.2">
          Як ти зараз почуваєшся?
        </Title>
        <MoodLevelSelector moodLevel={moodLevel} setMoodLevel={setMoodLevel} />
      </Stack>
      <Stack w="50%">
        <Title order={4} c="gray.2">
          Дата та час запису
        </Title>
        <DateTimePicker
          value={entryDateTime}
          onChange={setEntryDateTime}
          allowDeselect
        />
      </Stack>
      <Stack w="50%">
        <Title order={4} c="gray.2">
          Записи
        </Title>
        <Textarea
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          rows={7}
        />
      </Stack>

      <Button w="30%">Зберегти запис</Button>
    </Stack>
  );
}
