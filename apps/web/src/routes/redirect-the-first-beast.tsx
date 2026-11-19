import { redirect } from 'react-router';

export function loader() {
	return redirect('/chapter-13/the-first-beast', 301);
}
