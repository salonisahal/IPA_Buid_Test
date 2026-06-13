export interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
  accent: string;
}

export interface Lesson {
  id: string;
  subjectId: string;
  title: string;
  chapter: string;
  startTime: string;
  endTime: string;
  room: string;
  teacher: string;
  avatar: string;
  color: string;
}

export interface DayItem {
  id: string;
  label: string;
  date: number;
  isActive?: boolean;
}
