import { redirect } from 'react-router';

export function loader() {
	return redirect('/chapter-13/the-second-beast', 301);
}
