import { redirect } from 'react-router';

export function loader() {
	return redirect('/topics/forty-two-months', 301);
}
