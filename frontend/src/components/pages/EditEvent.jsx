import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  const event = data.event;

  return <EventForm event={event} method="patch" />;
}

export default EditEventPage;
