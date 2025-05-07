import { Title, Stack } from "@mantine/core";
import "./App.css";
// Debug only
import { entries } from "./dummyDb";
import MoodEntryForm from "./components/moodEntryForm";
import EntryCard from "./components/entryCard";

function App() {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <Title order={1} c="white">
          Щоденник настрою
        </Title>

        <Stack py="xl" gap={1}>
          <Title order={2} c="gray.3">
            Додати запис
          </Title>
          <MoodEntryForm />
        </Stack>

        <Stack py="xl" gap={1}>
          <Title order={2} c="gray.3">
            Журнал записів
          </Title>
          <Stack>
            { entries.map(((entry, ind) => (
              <EntryCard
                key={ind}
                moodLevel={entry.moodLevel}
                dateTime={entry.dateTime}
                notes={entry.notes}
              />
            ))) }
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default App;
