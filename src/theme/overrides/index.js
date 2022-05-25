import Card from './Card'
import Table from './Table';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
  );
}
